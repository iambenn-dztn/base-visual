# scripts/_deprecated — đã ngừng dùng

Giữ để tham khảo. **Không script nào trong pipeline hiện tại gọi tới đây.**

| File | Vì sao bỏ | Thay bằng |
|---|---|---|
| `render.mjs` | Renderer Puppeteer cho mô hình `visual.html` + `window.seek()`. Mô hình đó đã bỏ hoàn toàn (xem `docs/superpowers/specs/2026-07-04-hyperframes-migration.md`); không project nào còn `visual.html`. | `npx hyperframes render` |
| `voice-elevenlabs.mjs` | Fallback TTS ElevenLabs. **Hỏng trên thực tế:** nó không sinh `.srt`, mà `gen-captions.mjs` bắt buộc cần `.srt` để cắt phụ đề → dùng vào là gãy phụ đề. | `voice-aimax.mjs` |
| `wire-audio.mjs` | Bản tiền thân của `finalize-remap.mjs` — làm cùng việc (remap `realToDry`, regen CUES, gắn `<audio>`) nhưng thiếu splice CUES và cập nhật `data-duration`. | `finalize-remap.mjs` |

Muốn khôi phục cái nào thì chuyển ngược lên `scripts/` và cập nhật `scripts/README.md`.
