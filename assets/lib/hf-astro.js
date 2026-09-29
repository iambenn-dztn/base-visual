/* ============================================================================
 * hf-astro.js — bộ khung dùng chung cho composition Du Mục Vũ Trụ
 *
 * Trích từ các tập ĐÃ RENDER VÀ VERIFY (01–07). Trước khi có file này, mỗi tập
 * tự dựng lại cùng một đoạn code (mulberry32, ACESFilmic, composer+bloom, lens
 * pass, starfield, tra phụ đề, driver timeline) — nên bug đã sửa ở tập này lại
 * tái xuất ở tập sau. Dùng file này thay vì chép tay.
 *
 * CÁCH DÙNG: KHÔNG nạp bằng thẻ script ngoài. Preview/render server của HyperFrames
 *      không phục vụ file .js tuỳ ý trong project — nó trả về SPA shell HTML cho
 *      đường dẫn đó, browser parse "doctype html" thành lỗi cú pháp và tập chết
 *      (đã kiểm chứng: curl -D- trả về 200 text/html, 593 byte). Composition phải
 *      TỰ CHỨA. Nhúng bằng:
 *
 *          node scripts/inject-lib.mjs --html index.html
 *
 *      Lệnh này dán nội dung file này vào đầu khối code của tập, giữa hai mốc
 *      HFA:BEGIN / HFA:END. Chạy lại được nhiều lần. Định nghĩa một global: HFA.
 *      Yêu cầu three.min.js + EffectComposer/RenderPass/ShaderPass/UnrealBloomPass
 *      đã nạp trước đó.
 *
 * LUẬT TẤT ĐỊNH: file này không dùng Date.now / performance.now / Math.random /
 * requestAnimationFrame / setTimeout. Mọi thứ là hàm thuần của t hoặc của seed.
 * ========================================================================== */
(function (global) {
  'use strict';

  var HFA = {};

  /* ---- PRNG có seed ------------------------------------------------------
   * Math.random() bị cấm (render phải tất định). Mỗi cụm vật thể dùng MỘT
   * seed riêng — dùng chung một chuỗi cho hai cụm thì thêm/bớt hạt ở cụm này
   * sẽ xê dịch layout cụm kia.
   */
  HFA.mulberry32 = function (a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  /* ---- helper toán -------------------------------------------------------- */
  HFA.clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };

  HFA.smooth = function (x) { x = HFA.clamp(x, 0, 1); return x * x * (3 - 2 * x); };

  /** Bao lồi mềm: 0 ngoài [a,b], lên/xuống mượt trong dải f giây ở hai mép.
   *
   * Hoà chéo đặt ĐỐI XỨNG quanh mốc cảnh: cảnh chỉ nhú lên từ a-f/2 và tắt hẳn
   * ở b+f/2, nên hai cảnh liền nhau chồng đúng f giây và tổng trọng số luôn = 1
   * (không chớp đen). Bản cũ dùng a-f .. a+f với mẫu số 2f: cảnh mới hiện sớm
   * cả f giây trước mốc và cảnh cũ nán lại thêm f giây sau mốc, tổng thời gian
   * dính hình là 2f — chuyển cảnh nhoè, hình cue trước còn đọng khi lời đã sang
   * ý mới. Xem tập mat-trang t=167,33s (Trái Đất + Sao Hoả + Mặt Trăng chồng nhau).
   */
  HFA.band = function (t, a, b, f) {
    f = f || 0.8;
    var h = f * 0.5;
    if (t < a - h || t > b + h) return 0;
    var up = HFA.smooth((t - (a - h)) / f);
    var dn = HFA.smooth(((b + h) - t) / f);
    return Math.min(1, Math.min(up, dn));
  };

  /* ---- cửa sổ cảnh --------------------------------------------------------
   * SC = {A:[start,end], B:[...], ...} theo GIÂY THẬT (lấy từ timing.json cue.start).
   * Trả về loc(t,k) ∈ [0,1] (tiến độ trong cảnh) và inSc(t,k).
   */
  HFA.scenes = function (SC) {
    return {
      SC: SC,
      loc: function (t, k) {
        var w = SC[k];
        return Math.min(1, Math.max(0, (t - w[0]) / (w[1] - w[0])));
      },
      inSc: function (t, k) { var w = SC[k]; return t >= w[0] && t < w[1]; }
    };
  };

  /* ---- shader lens — PASS CUỐI, kiêm luôn tone mapping + mã hoá sRGB --------
   *
   * ⚠ VÌ SAO PASS NÀY PHẢI TỰ TONE MAP:
   * three.js chỉ chèn ACES + sRGB vào shader của VẬT LIỆU nó tự dựng. Một
   * ShaderMaterial thô trong ShaderPass KHÔNG được chèn — nên khi pass cuối ghi
   * ra màn hình, ảnh chưa hề được mã hoá sRGB.
   * Đo thật (xám #808080, r128): vẽ thẳng = 197, qua EffectComposer = 143.
   * Sai lệch đó là lý do các tập 01–07 ra tối hơn và sai gamma.
   *
   * Vì vậy chuỗi mới là: cảnh vẽ TUYẾN TÍNH vào target HDR (không tone map)
   * → bloom ăn giá trị HDR thật → pass này mới ACES + sRGB ở bước cuối.
   * Bloom đứng TRƯỚC tone mapping mới đúng thứ tự điện ảnh: vùng cực sáng
   * (quang cầu, đĩa bồi tụ) chưa bị nén ngọn nên quầng sáng nở tự nhiên.
   *
   * Thứ tự trong shader: CA → vignette → fade (đều ở TUYẾN TÍNH, vì chúng là
   * phơi sáng) → ACES → sRGB → grain + flash (ở không gian hiển thị, vì grain
   * phim và chớp trắng là hiện tượng của bản in, không phải của ánh sáng).
   * Grain seed theo t, KHÔNG theo đồng hồ — cùng t phải cho cùng frame.
   */
  HFA.LensShader = {
    uniforms: {
      tDiffuse: { value: null }, uT: { value: 0 }, uVig: { value: 0.34 },
      uCA: { value: 0.0015 }, uGrain: { value: 0.045 },
      uFade: { value: 1.0 }, uFlash: { value: 0.0 },
      uExposure: { value: 1.02 }, uToneMap: { value: 1.0 }
    },
    vertexShader:
      'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: [
      'varying vec2 vUv;uniform sampler2D tDiffuse;',
      'uniform float uT,uVig,uCA,uGrain,uFade,uFlash,uExposure,uToneMap;',
      'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
      // ACES — SAO CHÉP ĐÚNG bản three.js r128 dùng cho ACESFilmicToneMapping
      // (ma trận vào/ra + RRTAndODTFit + tiền tỉ lệ /0.6). KHÔNG dùng xấp xỉ
      // Narkowicz: nó sáng hơn ~4% ở vùng trung, đo được (206 vs 197 trên xám
      // giữa) và sẽ lệch với mọi tài liệu/preset tính theo three.js.
      'vec3 rrt(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;',
      '  vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}',
      'vec3 aces(vec3 color){',
      '  const mat3 mIn=mat3(0.59719,0.07600,0.02840, 0.35458,0.90834,0.13383, 0.04823,0.01566,0.83777);',
      '  const mat3 mOut=mat3(1.60475,-0.10208,-0.00327, -0.53108,1.10813,-0.07276, -0.07367,-0.00605,1.07602);',
      '  color/=0.6;',
      '  color=mIn*color; color=rrt(color); color=mOut*color;',
      '  return clamp(color,0.0,1.0);}',
      // tuyến tính → sRGB, đúng công thức chuẩn (không phải pow(1/2.2) cho nhanh)
      'vec3 toSRGB(vec3 c){c=max(c,vec3(0.0));',
      '  return mix(c*12.92,1.055*pow(c,vec3(1.0/2.4))-0.055,step(vec3(0.0031308),c));}',
      'void main(){',
      '  vec2 d=vUv-0.5;float r=dot(d,d);',
      '  vec2 off=d*uCA*(1.0+r*2.2);',
      '  vec3 col;',
      '  col.r=texture2D(tDiffuse,vUv+off).r;',
      '  col.g=texture2D(tDiffuse,vUv).g;',
      '  col.b=texture2D(tDiffuse,vUv-off).b;',
      // --- còn ở TUYẾN TÍNH: vignette + fade là phơi sáng ---
      '  float vig=smoothstep(1.02,uVig,r*2.0);',
      '  col*=mix(1.0,vig,0.85);',
      '  col*=uFade;',
      // --- tone map + mã hoá hiển thị ---
      '  col=mix(col*uExposure,aces(col*uExposure),uToneMap);',
      '  col=toSRGB(col);',
      // --- không gian hiển thị: grain + chớp trắng ---
      '  float g=h(vUv*vec2(1920.0,1080.0)+fract(uT)*97.3)-0.5;',
      '  col+=g*uGrain;',
      '  col=mix(col,vec3(1.0,0.98,0.94),uFlash);',
      '  gl_FragColor=vec4(clamp(col,0.0,1.0),1.0);',
      '}'
    ].join('\n')
  };

  /* ---- dựng sân khấu ------------------------------------------------------
   * Trả về {renderer, scene, camera, composer, bloom, lens, W, H, loadTex}.
   * Ánh sáng mặc định (amb/key/rim) tắt được bằng opt.lights=false.
   */
  HFA.createStage = function (opt) {
    opt = opt || {};
    var W = opt.width || 1920, H = opt.height || 1080;
    var canvas = typeof opt.canvas === 'string'
      ? document.getElementById(opt.canvas)
      : (opt.canvas || document.getElementById('c'));

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(1);
    renderer.setSize(W, H);
    renderer.setClearColor(opt.clearColor != null ? opt.clearColor : 0x08080a, 1);

    // Tone mapping + sRGB CỐ Ý tắt ở đây: cả hai được làm ở pass lens cuối cùng.
    // Bật ở đây thì cảnh bị nén dải TRƯỚC khi bloom nhìn thấy (quầng sáng bẹt),
    // rồi lại không được mã hoá sRGB lúc ghi ra màn hình (xem chú thích LensShader).
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.outputEncoding = THREE.LinearEncoding;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      opt.fov || 46, W / H, opt.near || 0.05, opt.far || 60000);
    camera.position.set(0, 0, 60);

    if (opt.lights !== false) {
      var amb = new THREE.AmbientLight(0x232838, 0.85); scene.add(amb);
      var key = new THREE.DirectionalLight(0xffe8d2, 1.05); key.position.set(6, 4, 8); scene.add(key);
      var rim = new THREE.DirectionalLight(0x6f9cff, 0.4); rim.position.set(-8, -3, -6); scene.add(rim);
      scene.userData.lights = { amb: amb, key: key, rim: rim };
    }

    /* --- render target: MSAA + HDR -------------------------------------------
     * `antialias:true` ở trên CHỈ tác dụng lên framebuffer mặc định. Đi qua
     * EffectComposer là vẽ vào target offscreen, và target đó KHÔNG multisample
     * theo mặc định — nên cờ antialias thành vô nghĩa và mọi rìa bị răng cưa.
     * WebGLMultisampleRenderTarget (có từ r111) khôi phục MSAA thật.
     * HalfFloat giữ giá trị >1.0 để bloom ăn được highlight HDR thật.
     */
    var samples = opt.msaa != null ? opt.msaa : 4;
    var rtOpts = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: opt.hdr === false ? THREE.UnsignedByteType : THREE.HalfFloatType
    };
    var rt;
    if (samples > 0 && typeof THREE.WebGLMultisampleRenderTarget === 'function') {
      rt = new THREE.WebGLMultisampleRenderTarget(W, H, rtOpts);
      rt.samples = samples;
    } else {
      rt = new THREE.WebGLRenderTarget(W, H, rtOpts);
      if (samples > 0) console.warn('[hf-astro] không có WebGLMultisampleRenderTarget — chạy không MSAA.');
    }

    var composer = new THREE.EffectComposer(renderer, rt);
    composer.addPass(new THREE.RenderPass(scene, camera));

    /* Ngưỡng bloom: cảnh giờ là HDR TUYẾN TÍNH, không còn bị nén về [0,1] như
     * trước. Highlight thật nằm TRÊN 1.0, nên ngưỡng cũ 0.62 (chỉnh cho ảnh đã
     * tone map) sẽ làm cả những vùng sáng vừa cũng loé. Mặc định nâng lên 1.0. */
    var bloom = new THREE.UnrealBloomPass(
      new THREE.Vector2(W, H),
      opt.bloomStrength != null ? opt.bloomStrength : 0.78,
      opt.bloomRadius != null ? opt.bloomRadius : 0.7,
      opt.bloomThreshold != null ? opt.bloomThreshold : (opt.hdr === false ? 0.62 : 1.0));
    composer.addPass(bloom);

    // Bản sao uniforms để hai stage không dùng chung state.
    var lensDef = {
      uniforms: THREE.UniformsUtils.clone(HFA.LensShader.uniforms),
      vertexShader: HFA.LensShader.vertexShader,
      fragmentShader: HFA.LensShader.fragmentShader
    };
    var lens = new THREE.ShaderPass(lensDef);
    lens.renderToScreen = true;
    lens.uniforms.uExposure.value = opt.exposure != null ? opt.exposure : 1.02;
    composer.addPass(lens);

    var texLoader = new THREE.TextureLoader();
    texLoader.setCrossOrigin('anonymous');
    function loadTex(path, enc) {
      var tx = texLoader.load(path);
      if (enc) tx.encoding = enc;
      tx.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tx;
    }

    var stage = {
      renderer: renderer, scene: scene, camera: camera,
      composer: composer, bloom: bloom, lens: lens, rt: rt,
      W: W, H: H, loadTex: loadTex,
      clearColor: opt.clearColor != null ? opt.clearColor : 0x08080a
    };

    /* --- environment map (IBL) ----------------------------------------------
     * MeshStandardMaterial là vật liệu PBR: nó phản xạ MÔI TRƯỜNG. Không có
     * envMap thì kim loại và bề mặt bóng mất gần hết thông tin phản xạ, chỉ còn
     * highlight từ đèn → ra chất nhựa sơn. (Tập "Vàng" là ví dụ rõ nhất.)
     * Dựng một bầu trời tối có vài đốm sáng, nướng qua PMREM MỘT LẦN lúc khởi
     * tạo → tất định, không phụ thuộc t, mọi MeshStandardMaterial hưởng ngay
     * qua scene.environment mà không phải sửa từng vật liệu.
     */
    if (opt.environment !== false) {
      stage.environment = HFA.buildEnvironment(renderer, scene, opt.environmentSeed || 4242);
    }

    return stage;
  };

  /** Bầu trời sao mờ nướng thành envMap PMREM. Trả về texture (đã gán scene.environment). */
  HFA.buildEnvironment = function (renderer, scene, seed) {
    var pr = HFA.mulberry32(seed);
    var cv = document.createElement('canvas');
    cv.width = 512; cv.height = 256;
    var cx = cv.getContext('2d');

    // nền: gradient rất tối, hơi lạnh ở dưới, ấm nhạt ở trên (ánh sáng thiên hà)
    var gr = cx.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, '#0a0d16'); gr.addColorStop(0.5, '#070910'); gr.addColorStop(1, '#05060b');
    cx.fillStyle = gr; cx.fillRect(0, 0, 512, 256);

    // dải Ngân Hà mờ vắt ngang → cho phản xạ có hướng, tránh env phẳng lì
    var bandGr = cx.createLinearGradient(0, 96, 0, 160);
    bandGr.addColorStop(0, 'rgba(70,80,110,0)');
    bandGr.addColorStop(0.5, 'rgba(120,130,165,0.30)');
    bandGr.addColorStop(1, 'rgba(70,80,110,0)');
    cx.fillStyle = bandGr; cx.fillRect(0, 96, 512, 64);

    // vài nguồn sáng nhỏ để kim loại có điểm loé
    for (var i = 0; i < 220; i++) {
      var x = pr() * 512, y = pr() * 256, s = pr() < 0.06 ? 2.2 : 1.0;
      var b = 0.35 + pr() * 0.65;
      cx.fillStyle = 'rgba(255,252,245,' + b.toFixed(3) + ')';
      cx.fillRect(x, y, s, s);
    }

    var tex = new THREE.CanvasTexture(cv);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.encoding = THREE.sRGBEncoding;

    var pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    var env = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose();
    tex.dispose();

    scene.environment = env;   // KHÔNG gán scene.background — nền do starfield lo
    return env;
  };

  /* ---- CHỌN MÀU SAO CHO SỐNG SÓT QUA ACES ---------------------------------
   * Bài học đo được ở tập 08, tốn 3 vòng sửa mới ra. Đọc trước khi chọn bảng màu.
   *
   * ACES nén mạnh vùng sáng. Càng đẩy độ sáng lên, sắc càng bị kéo về trắng/xám.
   * Nên SẮC PHẢI ĐẾN TỪ TỈ LỆ GIỮA CÁC KÊNH, không đến từ độ sáng.
   *
   * Đo thật (bão hoà còn lại sau khi qua chuỗi ACES của three.js r128):
   *   (0.42, 0.60, 1.05)  → còn 11–25%  → ra XÁM BÊ TÔNG. Đừng dùng.
   *   (0.10, 0.32, 1.00)  → còn 37–67%  → ra LAM THẬT.
   *
   * Quy tắc rút ra:
   *   - Kênh yếu nên ≤ 0.2× kênh mạnh. Nâng kênh yếu lên là giết sắc.
   *   - Kênh mạnh giữ quanh 1.0, đừng hơn.
   *   - Muốn SÁNG hơn thì tăng emissive (vượt ngưỡng bloom), ĐỪNG nâng kênh yếu.
   *
   * Hệ quả cho chữ và sơ đồ: bloom làm NHOÈ MẤT NÉT CHỮ. Nét biểu đồ và typo phải
   * để DƯỚI ngưỡng bloom (<1.0). Muốn chữ rõ hơn thì tăng độ dày nét, không tăng
   * emissive.
   *
   * Chống cháy trắng: giữ diện tích có luminance >0.85 (sau tonemap) dưới ~12%
   * khung. Cần một vùng sáng rộng thì đẩy bằng SỐ LƯỢNG hạt nhỏ, đừng đẩy bằng
   * độ sáng của hạt lớn.
   */
  HFA.saturationAfterACES = function (r, g, b) {
    // Ước lượng nhanh xem một màu tuyến tính có giữ được sắc sau ACES không.
    // Trả về {before, after} ∈ [0,1]. after < 0.3 nghĩa là sẽ ra xám.
    function aces(v) {
      // xấp xỉ đủ dùng để SO SÁNH các màu với nhau (không phải bản đầy đủ)
      return Math.max(0, Math.min(1, (v * (2.51 * v + 0.03)) / (v * (2.43 * v + 0.59) + 0.14)));
    }
    function sat(x, y, z) {
      var mx = Math.max(x, y, z), mn = Math.min(x, y, z);
      return mx <= 0 ? 0 : (mx - mn) / mx;
    }
    return { before: sat(r, g, b), after: sat(aces(r), aces(g), aces(b)) };
  };

  /* ---- sprite hạt tròn mềm (tránh hạt vuông) ------------------------------ */
  HFA.dotTex = function (rr, gg, bb) {
    var cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    var cx = cv.getContext('2d');
    var gr = cx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(' + rr + ',' + gg + ',' + bb + ',1)');
    gr.addColorStop(0.4, 'rgba(' + rr + ',' + gg + ',' + bb + ',0.55)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    cx.fillStyle = gr; cx.fillRect(0, 0, 64, 64);
    var tx = new THREE.CanvasTexture(cv);
    tx.encoding = THREE.sRGBEncoding;
    return tx;
  };

  /* ---- BỐN LỖI ĐÃ LÀM CHẾT HÀNG CHỤC CẢNH — đọc trước khi dựng tập mới -----
   *
   * Cả bốn đều KHÔNG bị `hyperframes validate` bắt, vì validate chỉ lấy vài mẫu
   * thời gian. Chúng chỉ lộ ra khi render ảnh và NHÌN. Rút từ tập 09–12.
   *
   * 1. BIẾN BỊ CHE (shadowing).
   *    Tập "nước": một mesh tên `grain` bị che bởi `var grain = 0.040` (lượng
   *    grain của lens) khai báo ngay trong renderAtTime → mọi cảnh từ S19 trở đi
   *    chết. Đặt tên mesh khác hẳn tên biến cục bộ; đối chiếu danh sách biến
   *    top-level với biến trong renderAtTime trước khi giao.
   *
   * 2. GỌI UNIFORM KHÔNG TỒN TẠI.
   *    Tập "photon": gọi `.uniforms.uEm` trên kết quả của HFA.buildStars — hàm
   *    đó CHỈ có `uOp`. Ném TypeError, 17 cảnh liên tiếp đứng hình. Kiểm API
   *    thư viện trước khi gọi, đừng đoán tên uniform.
   *
   * 3. SAI TỈ LỆ SÂN KHẤU.
   *    Tập "nước": nguyên tử r=1.30 đặt trên mặt cầu r=140 với camera cách 2.7
   *    → hai quả cầu phủ kín khung, ống liên kết thành tấm phẳng. Tính trước
   *    tỉ lệ vật thể so với khoảng cách camera, đừng chỉnh mò sau.
   *
   * 4. CHỮ QUÁ NHỎ KHÔNG ĐỌC NỔI.
   *    Tập "nước": chữ cao 0.42 world ở khoảng cách camera 28 → ra dưới 18px
   *    trên 1080p. Cần ≥26px. Với mỗi shot có chữ, tính trước
   *    `px ≈ (h_world / (2 * d * tan(fov/2))) * 1080` rồi mới chốt camera.
   *    Muốn chữ rõ hơn thì TĂNG ĐỘ DÀY NÉT, đừng tăng emissive — bloom làm
   *    nhoè mất nét chữ. Giữ chữ và sơ đồ DƯỚI ngưỡng bloom 1.0.
   */

  /* ---- CHỮ TIẾNG VIỆT TRÊN CANVAS: CANVAS PHẢI ĐỦ CAO CHO DẤU ------------
   *
   * Lỗi hệ thống, đo được ở tập quasar: 72/121 nhãn bị CẮT MẤT DẤU.
   *
   * Cơ chế: canvas 2D đặt `textBaseline='middle'` canh em-box vào giữa chiều
   * cao canvas. Nhưng dấu tiếng Việt nhô RA NGOÀI em-box — mũ/sắc/huyền/ngã/hỏi
   * nhô lên trên cap-height (chồng hai tầng như `ế`, `ộ`), dấu nặng thụt xuống
   * dưới baseline. Canvas chật thì chữ cái vẫn vẽ, dấu rơi ra ngoài vùng vẽ.
   * Triệu chứng: "vài chục nghìn ly" render ra "vai chuc nghin ly" dù mã nguồn
   * viết đúng dấu.
   *
   * Ngưỡng an toàn đo được: `hpx >= fpx * 2.4 * số_dòng`.
   * ⚠ Ngưỡng 2.0 KHÔNG đủ — một nhãn ở tỉ lệ 2.09 vẫn bị cắt.
   *
   * Nới canvas kéo theo HAI hệ quả phải xử cùng lúc, nếu không sẽ hỏng kiểu khác:
   *   1. Tỉ lệ khung của plane phải tính theo chiều cao THẬT sau khi nở, không
   *      theo `hpx` gốc — nếu không mọi chữ bị KÉO GIÃN NGANG.
   *   2. Trần bù `glyphFrac` phải chia cho hệ số nở — canvas cao hơn làm
   *      glyphFrac tụt, trần giữ nguyên thì chữ NHỎ ĐI THẬT (đo được 32px → 21px).
   *
   * Dùng `HFA.canvasHeightForText` khi tự dựng nhãn canvas.
   *
   * ---- CHỮ NHẬT (kanji/kana) THÌ KHÁC ------------------------------------
   * Kanji KHÔNG có dấu nhô ra ngoài em-box: chữ nằm gọn trong hộp vuông.
   * Đo thật ngày 2026-09-21 (BIZ UDPGothic 700, headless Chrome, "位牌と仏壇"):
   *   ascent 27.7px + descent 27.3px = 55.0px ở font 56px → tỉ lệ ~0.98.
   * Tức hệ số 2.4 của tiếng Việt CẤP DƯ hơn gấp đôi. Không gây cắt chữ, nhưng
   * canvas cao gấp đôi làm `glyphFrac` tụt một nửa → chữ NHỎ ĐI THẬT trên màn
   * hình (đúng cơ chế đã ghi ở hệ quả 2 bên trên). Vì thế tách hệ số theo chữ.
   * Vẫn để dư 1.45 cho phần nhô của 〜 ー ゛ ゜ và chữ Latin lẫn trong câu Nhật.
   */
  var CJK_RE = /[぀-ヿ㐀-䶿一-鿿＀-￯]/;

  /** true nếu chuỗi có chữ Nhật (kana/kanji/toàn角). */
  HFA.isCJK = function (s) { return CJK_RE.test(String(s || '')); };

  /**
   * Chiều cao canvas tối thiểu cho nhãn chữ.
   * @param fontPx cỡ chữ px
   * @param lines  số dòng
   * @param requestedHpx chiều cao mong muốn (lấy max)
   * @param text   (tuỳ chọn) chữ sẽ vẽ — có chữ Nhật thì dùng hệ số 1.45 thay vì 2.4.
   *               Bỏ trống = giữ nguyên hành vi cũ (2.4) cho các tập tiếng Việt.
   */
  HFA.canvasHeightForText = function (fontPx, lines, requestedHpx, text) {
    var k = (text != null && HFA.isCJK(text)) ? 1.45 : 2.4;
    var need = Math.ceil(fontPx * k * (lines || 1));
    return Math.max(requestedHpx || 0, need);
  };

  /** px ước tính của một vật cao `hWorld` ở khoảng cách `dist`, camera fov độ.
   *
   * ⚠ HÀM NÀY ĐO PLANE, KHÔNG ĐO CHỮ. Với nhãn vẽ bằng canvas texture, chữ dài
   * làm font bị thu nhỏ cho vừa canvas trong khi plane vẫn giữ nguyên kích
   * thước → glyph thật chỉ chiếm 55–62% chiều cao plane. Đo được ở tập quasar:
   * hàm báo 49px trong khi chữ trên frame render chỉ **4px**.
   *
   * Với nhãn canvas, truyền `glyphFrac` (tỉ lệ chiều cao glyph / chiều cao
   * plane, thường 0.55–0.68) làm tham số thứ 5, hoặc tốt hơn: cho `textTex`
   * trả về glyphFrac thật rồi chia hWorld cho nó khi dựng plane.
   *
   * Cách đáng tin duy nhất vẫn là ĐO TRÊN FRAME ĐÃ RENDER. Ngưỡng đọc được:
   * ≥26px @1080p.
   */
  HFA.estimatePx = function (hWorld, dist, fovDeg, screenH, glyphFrac) {
    var f = (fovDeg || 46) * Math.PI / 180;
    var px = (hWorld / (2 * dist * Math.tan(f / 2))) * (screenH || 1080);
    return px * (glyphFrac == null ? 1 : glyphFrac);
  };

  /* ---- starfield màu theo nhiệt độ ----------------------------------------
   * ⚠ BÁN KÍNH: radius PHẢI lớn hơn khoảng cách camera XA NHẤT trong cả timeline.
   * Camera bay ra ngoài quả cầu sao → nhìn thấy "quả bóng vũ trụ" bo tròn. Đây là
   * lỗi đã xảy ra thật. Truyền opt.maxCamDist để bật cảnh báo tự động.
   * Hằng số trong gl_PointSize phải BẰNG ĐÚNG radius, nếu không sao đổi độ to khi
   * đổi bán kính — nên nó được nội suy vào shader ngay dưới đây.
   */
  HFA.buildStars = function (opt) {
    opt = opt || {};
    var R = opt.radius || 9000;
    var N = opt.count || 3600;
    var pr = HFA.mulberry32(opt.seed || 20260808);

    if (opt.maxCamDist && R <= opt.maxCamDist * 1.5) {
      console.warn('[hf-astro] starfield radius ' + R + ' quá nhỏ so với camera xa nhất ' +
        opt.maxCamDist + ' — sẽ lộ "quả bóng vũ trụ". Tăng radius lên >' +
        Math.ceil(opt.maxCamDist * 2) + ' (và giữ < camera.far).');
    }

    var pos = new Float32Array(N * 3), col = new Float32Array(N * 3), siz = new Float32Array(N);
    var tmp = new THREE.Vector3();
    for (var i = 0; i < N; i++) {
      var u = pr(), v = pr();
      var theta = Math.acos(2 * u - 1), phi = 2 * Math.PI * v;
      tmp.set(Math.sin(theta) * Math.cos(phi), Math.cos(theta) * 0.8, Math.sin(theta) * Math.sin(phi))
        .normalize().multiplyScalar(R);
      pos[i * 3] = tmp.x; pos[i * 3 + 1] = tmp.y; pos[i * 3 + 2] = tmp.z;

      // màu theo nhiệt độ: xanh nóng → trắng → vàng nhạt
      var tt = pr(), c = new THREE.Color();
      if (tt < 0.14) c.setRGB(0.6, 0.72, 1.0);
      else if (tt < 0.5) c.setRGB(0.85, 0.9, 1.0);
      else if (tt < 0.8) c.setRGB(0.9, 0.92, 1.0);
      else c.setRGB(0.8, 0.82, 0.95);
      c.multiplyScalar(0.3 + pr() * 0.5);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;

      siz[i] = (pr() < 0.05 ? 2.6 : 1.0) * (0.8 + pr() * 1.4);
    }

    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aS', new THREE.BufferAttribute(siz, 1));

    var m = new THREE.ShaderMaterial({
      uniforms: { uOp: { value: 1 } },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader:
        'attribute float aS;attribute vec3 color;varying vec3 vC;' +
        'void main(){vC=color;vec4 mv=modelViewMatrix*vec4(position,1.0);' +
        'gl_PointSize=aS*(' + R.toFixed(1) + '/-mv.z);gl_Position=projectionMatrix*mv;}',
      fragmentShader:
        'varying vec3 vC;uniform float uOp;' +
        'void main(){vec2 d=gl_PointCoord-0.5;float r=length(d);' +
        'float a=smoothstep(0.5,0.0,r);gl_FragColor=vec4(vC,a*uOp);}'
    });

    var pts = new THREE.Points(g, m);
    pts.userData.radius = R;
    return pts;
  };

  /* ---- TÍCH LUỸ ĐA MẪU: khử răng cưa + motion blur thật -------------------
   *
   * Chỉ làm được vì renderAtTime(t) là HÀM THUẦN, không trạng thái: gọi lại với
   * t nào cũng cho đúng kết quả của t đó. Render offline nên được phép trả giá
   * bằng thời gian để đổi lấy chất lượng — đây là thứ engine realtime không có.
   *
   * Mỗi frame xuất ra lấy N mẫu:
   *   - t rải đều trong khoảng 1/fps      → MOTION BLUR thật theo quỹ đạo
   *   - camera lệch dưới-một-pixel        → SUPERSAMPLING, khử cả răng cưa
   *     shader/specular mà MSAA không xử lý được
   * rồi cộng trung bình.
   *
   * Giá: thời gian capture ×N. Nháp để samples=1, bản giao hàng đặt 4.
   *
   * CÁCH DÙNG — trong file tập:
   *   HFA.enableAccumulation(stage, {samples:4, fps:30});
   *   ... window.__time""lines[id] = HFA.makeTimeline(id, TOTAL, renderAtTime);
   * makeTimeline tự phát hiện stage đã bật tích luỹ nếu bạn truyền stage:
   *   HFA.makeTimeline(id, TOTAL, renderAtTime, stage)
   */
  HFA.enableAccumulation = function (stage, o) {
    o = o || {};
    var N = Math.max(1, o.samples || 1);
    if (N === 1) {
      // tắt tích luỹ → PHẢI trả composer về chế độ vẽ thẳng ra màn hình,
      // nếu không màn hình đen (không pass nào ghi ra nữa).
      stage.accum = null;
      stage.composer.renderToScreen = true;
      return stage;
    }

    /* Chuyển hướng đầu ra composer vào texture thay vì màn hình.
     * ⚠ PHẢI đặt trên COMPOSER, không phải trên pass: EffectComposer.render()
     * gán lại pass.renderToScreen mỗi frame theo công thức
     *   pass.renderToScreen = composer.renderToScreen && làPassCuốiCùng
     * nên mọi thiết lập trực tiếp lên lens.renderToScreen đều bị xoá. (Đo được:
     * đặt trên pass thì cả read/write buffer đều chứa dữ liệu TRƯỚC lens.) */
    stage.composer.renderToScreen = false;

    var rtOpts = {
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat, type: THREE.HalfFloatType
    };
    var accumRT = new THREE.WebGLRenderTarget(stage.W, stage.H, rtOpts);

    // quad toàn màn hình dùng để cộng dồn rồi để xuất ra
    var quadScene = new THREE.Scene();
    var quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    var quadMat = new THREE.ShaderMaterial({
      uniforms: { tSrc: { value: null }, uWeight: { value: 1 / N } },
      transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,   // cộng thuần
      vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}',
      fragmentShader: 'varying vec2 vUv;uniform sampler2D tSrc;uniform float uWeight;' +
        'void main(){gl_FragColor=vec4(texture2D(tSrc,vUv).rgb*uWeight,1.0);}'
    });
    quadScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), quadMat));

    var outMat = new THREE.ShaderMaterial({
      uniforms: { tSrc: { value: accumRT.texture } },
      depthTest: false, depthWrite: false,
      vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}',
      fragmentShader: 'varying vec2 vUv;uniform sampler2D tSrc;' +
        'void main(){gl_FragColor=vec4(texture2D(tSrc,vUv).rgb,1.0);}'
    });
    var outScene = new THREE.Scene();
    outScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), outMat));

    stage.accum = {
      samples: N, fps: o.fps || 30,
      rt: accumRT, quadScene: quadScene, quadCam: quadCam,
      quadMat: quadMat, outScene: outScene
    };
    return stage;
  };

  /* Vị trí lệch subpixel — chuỗi Halton (2,3): phân bố đều hơn ngẫu nhiên,
   * và tất định tuyệt đối (không đụng tới PRNG chung). */
  function halton(i, b) {
    var f = 1, r = 0;
    while (i > 0) { f /= b; r += f * (i % b); i = Math.floor(i / b); }
    return r;
  }

  /** Vẽ MỘT frame tại t. Tự dùng tích luỹ nếu stage đã bật, không thì vẽ thẳng. */
  HFA.renderFrame = function (stage, renderAtTime, t) {
    var acc = stage && stage.accum;
    if (!acc) { renderAtTime(t); return; }   // renderAtTime tự gọi composer.render()

    var r = stage.renderer, cam = stage.camera, N = acc.samples;
    var dt = 1 / acc.fps;
    var prevAutoClear = r.autoClear;

    // xoá bộ tích luỹ ĐÚNG MỘT LẦN, trước vòng lặp
    r.setRenderTarget(acc.rt);
    r.setClearColor(0x000000, 1);
    r.clear(true, true, true);
    r.setRenderTarget(null);

    for (var i = 0; i < N; i++) {
      // lệch dưới-một-pixel (Halton, tất định)
      var jx = halton(i + 1, 2) - 0.5, jy = halton(i + 1, 3) - 0.5;
      cam.setViewOffset(stage.W, stage.H, jx, jy, stage.W, stage.H);

      // trải t trong đúng một frame → motion blur
      var tt = t + ((i + 0.5) / N - 0.5) * dt;
      r.setClearColor(stage.clearColor, 1);   // trả màu nền cho RenderPass
      renderAtTime(tt < 0 ? 0 : tt);

      /* ⚠ autoClear PHẢI tắt ở đây.
       * renderer.autoClear mặc định TRUE → mỗi r.render() xoá sạch target trước
       * khi vẽ. Cộng dồn mà không tắt thì 3 mẫu đầu bị xoá, chỉ mẫu cuối sống
       * sót và nó mang trọng số 1/N → ảnh tối đúng N lần. (Đã dính lỗi này:
       * ảnh ra tối bằng 1/4 với N=4.) */
      // pass cuối có needsSwap=true nên sau render(), kết quả nằm ở readBuffer
      acc.quadMat.uniforms.tSrc.value = stage.composer.readBuffer.texture;
      r.autoClear = false;
      r.setRenderTarget(acc.rt);
      r.render(acc.quadScene, acc.quadCam);
      r.setRenderTarget(null);
      r.autoClear = prevAutoClear;
    }

    cam.clearViewOffset();
    r.setClearColor(stage.clearColor, 1);
    r.render(acc.outScene, acc.quadCam);   // xuất ra màn hình
  };

  /* ---- phụ đề -------------------------------------------------------------
   * CUES = [{t, s}] do scripts/gen-captions.mjs sinh, đã cắt sẵn MỘT DÒNG:
   * ≤42 ký tự với tiếng Việt, ≤22 ký tự toàn角 với tiếng Nhật (chữ Nhật rộng gấp đôi).
   * Đừng cắt tay và đừng đổi mảng này bằng tay.
   */
  HFA.subtitleAt = function (CUES, t) {
    var s = '';
    for (var i = 0; i < CUES.length; i++) {
      if (CUES[i].t <= t + 0.001) s = CUES[i].s; else break;
    }
    return s;
  };

  HFA.applySubtitle = function (el, CUES, t) {
    if (!el) return;
    var s = HFA.subtitleAt(CUES, t);
    if (el.textContent !== s) el.textContent = s;   // chỉ ghi khi đổi
  };

  /* ---- nhãn chương --------------------------------------------------------
   * marks = [{t, x:'CHƯƠNG 1'}, ...]; hiện `hold` giây rồi tắt mượt.
   */
  HFA.applyChapter = function (el, marks, t, hold) {
    if (!el) return 0;
    hold = hold || 5.5;
    var show = 0, txt = '';
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (t >= m.t && t < m.t + hold) {
        show = HFA.band(t, m.t + 0.3, m.t + hold - 0.7, 0.6);
        txt = m.x;
      }
    }
    if (el.textContent !== txt) el.textContent = txt;
    el.style.opacity = show.toFixed(3);
    return show;
  };

  /* ---- fade vào/ra toàn cục ----------------------------------------------- */
  HFA.globalFade = function (t, TOTAL, inSec, outSec) {
    return HFA.smooth(t / (inSec || 1.5)) * HFA.smooth((TOTAL - t) / (outSec || 3.0));
  };

  /* ---- dựng timeline ------------------------------------------------------
   * ⚠ HÀM NÀY KHÔNG TỰ ĐĂNG KÝ — và đó là chủ ý.
   * StaticGuard của HyperFrames QUÉT VĂN BẢN file composition để tìm chuỗi
   * `window.__timelines`. Giấu phần đăng ký vào thư viện này làm guard báo
   * "Missing window.__timelines registration" và render ra frame tĩnh.
   * (Đã kiểm chứng bằng hyperframes validate.)
   *
   * Vì vậy file tập PHẢI tự viết hai dòng đăng ký. Mẫu (thay SLUG bằng slug thật,
   * và viết bằng cú pháp ngoặc vuông bình thường — ở đây tách chữ để chính bản
   * hướng dẫn này không bị StaticGuard đếm nhầm thành một đăng ký có thật):
   *
   *     window.__time""lines = window.__time""lines || {};
   *     window.__time""lines[ "SLUG" ] = HFA.makeTimeline("SLUG", TOTAL, renderAtTime);
   *
   * SLUG phải trùng data-composition-id của div gốc.
   * (StaticGuard quét VĂN BẢN, kể cả trong comment — đừng viết ví dụ đăng ký
   *  nguyên dạng ở bất kỳ đâu trong file dùng chung này.)
   *
   * Đổi lại, hàm này lo phần dễ sai: driver clk tuyến tính, bọc try/catch để
   * lỗi hiện lên #err (thay vì ra frame đen không rõ lý do), và vẽ frame đầu.
   */
  HFA.makeTimeline = function (id, TOTAL, renderAtTime, stage) {
    if (!document.querySelector('[data-composition-id="' + id + '"]')) {
      console.warn('[hf-astro] không thấy [data-composition-id="' + id + '"] — ' +
        'khoá timeline phải trùng id của div gốc.');
    }
    function safeRender(t) {
      try {
        // truyền stage (đã enableAccumulation) → mỗi frame lấy N mẫu
        if (stage && stage.accum) HFA.renderFrame(stage, renderAtTime, t);
        else renderAtTime(t);
      } catch (err) {
        var eb = document.getElementById('err');
        if (eb) {
          eb.style.display = 'block';
          eb.textContent = 'renderAtTime@' + t.toFixed(2) + ': ' + err.message;
        }
        throw err;
      }
    }
    var tl = gsap.timeline({ paused: true });
    var clk = { t: 0 };
    tl.to(clk, { t: TOTAL, duration: TOTAL, ease: 'none', onUpdate: function () { safeRender(clk.t); } }, 0);
    safeRender(0);          // vẽ frame đầu
    return tl;
  };

  global.HFA = HFA;
})(window);
