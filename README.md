# X.com Video Downloader

> A Chrome extension to download videos from X.com (Twitter) directly to your disk — no third-party sites, no account required.

![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)
[![Download](https://img.shields.io/github/v/release/gelu22/x-twitter-video-downloader?label=Download&logo=github)](https://github.com/gelu22/x-twitter-video-downloader/releases/latest/download/extension.zip)

---

## ✨ Features

- 🎬 Downloads the **highest-quality MP4** available for any tweet
- 📋 **Auto-detects** tweet URLs from clipboard when the popup opens
- 💾 Uses the browser's native download dialog — you choose where to save
- 🌙 Dark UI matching X.com's design
- ⚡ No sign-in, no account, no registration required
- 🔒 **No data collection** — everything runs locally in your browser

## 📦 Installation

### From Chrome Web Store *(coming soon)*
Search for **X.com Video Downloader** or use the direct link.

### Manual (Developer Mode)

> Chrome Web Store version is pending review. In the meantime, install manually in ~1 minute:

1. **[⬇ Download extension.zip](https://github.com/gelu22/x-twitter-video-downloader/releases/latest/download/extension.zip)**
2. **Unzip** the downloaded file into a folder (e.g. `x-video-downloader/`)
   - Windows: right-click → *Extract All*
   - Mac: double-click the `.zip` file
3. Open Chrome and go to **`chrome://extensions/`**
4. Enable **Developer mode** using the toggle in the top-right corner
5. Click **Load unpacked** → select the **unzipped folder** (not the `.zip` file!)
6. The extension icon (blue circle with X↓) appears in your toolbar

> ⚠️ Chrome may show a warning that the extension is not from the Web Store — this is normal for manually installed extensions.

## 🚀 How to use

1. Copy a tweet link with a video (e.g. `https://x.com/user/status/123456789`)
2. Click the extension icon — the link is auto-filled from clipboard
3. Click **Download video**
4. Choose where to save the `.mp4` file

## 🔐 Permissions

| Permission | Why it's needed |
|---|---|
| `clipboardRead` | Reads clipboard once on popup open to auto-fill a copied tweet URL. Nothing is sent anywhere. |
| `downloads` | Triggers the browser's native download dialog to save the video file. |
| `x.com / twitter.com` | Matches tweet URLs to extract the tweet ID. |
| `twimg.com` | Twitter's CDN — video files are hosted here. |

## 🛠 Tech stack

- Manifest V3 · Vanilla JS · No dependencies · No build tools
- Uses the public Twitter Syndication API (`cdn.syndication.twimg.com`) — no auth required

## 📁 File structure

```
├── manifest.json       # Extension config (Manifest V3)
├── popup.html          # Popup UI
├── popup.js            # Download logic
├── background.js       # Service worker (minimal)
├── privacy-policy.html # Privacy policy (hosted via GitHub Pages)
└── icons/              # 16 / 48 / 128 px PNG icons
```

## ☕ Support

If this extension saved you time, a small tip is appreciated:

**[Buy me a coffee →](https://buymeacoffee.com/tomek_dev_by_night)**

## ⚠️ Disclaimer

This extension downloads publicly available video content. Please respect copyright and
[X.com's Terms of Service](https://twitter.com/en/tos) when using downloaded content.

## 📄 License

[MIT](LICENSE)
