# Chrome Web Store – Listing Content
# X.com Video Downloader

---

## NAME (max 45 chars)
X.com Video Downloader

## SHORT DESCRIPTION (max 132 chars)
Download videos from X.com (Twitter) to your disk with one click. Paste a tweet link and save the best quality MP4.

---

## FULL DESCRIPTION (max 16 000 chars)

**Download X.com / Twitter videos directly to your computer – no third-party websites, no account required.**

Simply paste a tweet link (or let the extension read it from your clipboard automatically) and download the video in the best available MP4 quality.

### ✨ Features
- 🎬 Downloads the highest-quality MP4 available
- 📋 Auto-detects tweet URLs from clipboard when you open the popup
- 💾 Uses your browser's native download dialog – you choose where to save
- 🌙 Dark UI matching X.com's design
- ⚡ No sign-in, no account, no registration required
- 🔒 No data collection – everything runs locally in your browser

### 📋 How to use
1. Copy a tweet link containing a video (e.g. `https://x.com/user/status/123456`)
2. Click the extension icon – the link will be auto-filled from clipboard
3. Click **Download video**
4. Choose where to save the file

### 🔐 Permissions explained
- **clipboardRead** – reads the clipboard once when you open the popup to auto-fill the tweet URL. Nothing is sent anywhere.
- **downloads** – triggers your browser's download dialog to save the video file.
- **x.com / twitter.com / twimg.com** – needed to fetch publicly available video metadata and download the video file from Twitter's CDN.

### ⚠️ Note
This extension downloads publicly available videos. Please respect copyright and the terms of service of X.com when using downloaded content.

---

## CATEGORY
Tools  (alternatively: Productivity)

## LANGUAGE
English

---

## PERMISSION JUSTIFICATIONS (filled in the Developer Dashboard form)

| Permission | Justification |
|---|---|
| clipboardRead | Reads clipboard once when popup opens to auto-detect a copied tweet URL. The text is used only to populate the input field. No data is transmitted. |
| downloads | Required to trigger the browser's native download dialog to save the MP4 video file chosen by the user. |
| *://*.twitter.com/* | Needed to match tab context and support old twitter.com URLs. |
| *://*.x.com/* | Needed to match tab context and support current x.com URLs. |
| *://*.twimg.com/* | Twitter's CDN domain – video files are hosted here and must be downloadable. |

---

## SINGLE PURPOSE DESCRIPTION
(Required field in dashboard)

This extension has a single purpose: to let users download MP4 videos from publicly available X.com (Twitter) posts.

---

## PRIVACY POLICY URL
https://gelu22.github.io/x-twitter-video-downloader/privacy-policy.html
(Replace with your actual URL after hosting on GitHub Pages)

---

## STORE LISTING SCREENSHOTS
Recommended size: 1280×800 px (or 640×400 px)
At least 1 required, up to 5 allowed.

Suggested screenshots:
1. Popup with a tweet URL filled in and "Download video" button
2. Popup showing "Download started ✓" success state
3. (Optional) Side-by-side: tweet with video on X.com + download dialog

---

## PROMOTIONAL TILE (optional but recommended)
Small tile: 440×280 px
Large tile: 920×680 px

---

## PRICING
Free  (see DONATIONS section for optional tip/donation setup)

---

## DONATIONS – "Pay what you want / $5 tip"

Chrome Web Store does not support built-in donations. Use one of these services:

### ⭐ Recommended: Ko-fi (0% fee)
1. Go to https://ko-fi.com and create a free account
2. In Ko-fi settings → "Kofi Button" → set suggested amount to $5
3. Replace the placeholder URL in popup.html:
   - Find:  `href="https://ko-fi.com"`
   - Replace with your Ko-fi URL, e.g.: `href="https://ko-fi.com/YOUR_USERNAME"`
4. Add to the Full Description in Chrome Web Store (last line):
   ```
   ☕ Enjoying the extension? A $5 tip is appreciated: https://ko-fi.com/YOUR_USERNAME
   ```

### Alternative: GitHub Sponsors
1. Enable Sponsors on your GitHub profile (github.com/sponsors)
2. Create a $5 tier (e.g. "Buy me a coffee")
3. Add a FUNDING.yml to your repo:
   ```yaml
   github: YOUR_GITHUB_USERNAME
   ko_fi: YOUR_KO_FI_USERNAME
   ```
4. GitHub takes 0% fee.

### Alternative: Buy Me a Coffee
- Default tip amount is exactly $5 — fits perfectly
- Sign up at https://www.buymeacoffee.com
- Replace Ko-fi URL in popup.html with your buymeacoffee.com link
