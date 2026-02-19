// Background service worker for Chrome
// This file is required by manifest.json but all logic is in popup.js
console.log("X.com Downloader background service worker loaded.");

// Optional: Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed successfully!');
  } else if (details.reason === 'update') {
    console.log('Extension updated to version:', chrome.runtime.getManifest().version);
  }
});
