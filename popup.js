document.getElementById('actionBtn').addEventListener('click', processVideo);
document.getElementById('urlInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    processVideo();
  }
});

// Auto-check clipboard on open
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const text = await navigator.clipboard.readText();
    const urlMatch = text.match(/https?:\/\/(twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/status\/([0-9]+)/);
    if (urlMatch) {
      document.getElementById('urlInput').value = text.trim();
    }
  } catch (err) {
    // Clipboard permission might not be granted yet
    console.log("Could not read clipboard:", err);
  }
});

async function processVideo() {
  const statusDiv = document.getElementById('status');
  const btn = document.getElementById('actionBtn');
  const urlInput = document.getElementById('urlInput');
  
  try {
    btn.disabled = true;
    statusDiv.textContent = "Pobieranie danych...";
    statusDiv.className = "info";

    // Get URL from input or clipboard
    let text = urlInput.value.trim();
    
    if (!text) {
      statusDiv.textContent = "Czytanie schowka...";
      text = await navigator.clipboard.readText();
    }

    console.log("Processing URL:", text);

    if (!text) {
      throw new Error("Brak linku. Wklej link do tweeta w pole powyżej.");
    }

    // Extract Tweet ID
    const urlMatch = text.match(/https?:\/\/(twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/status\/([0-9]+)/);
    if (!urlMatch || !urlMatch[2]) {
      throw new Error("Niepoprawny link do tweeta. Sprawdź czy link zawiera /status/ID");
    }

    const tweetId = urlMatch[2];
    statusDiv.textContent = `Pobieranie danych API dla ID: ${tweetId}...`;

    // Use Twitter Syndication API (official embed API)
    const apiUrl = `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&token=x`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": navigator.userAgent
      }
    });

    if (!response.ok) {
        if (response.status === 404) {
             throw new Error("Tweet nie istnieje lub został usunięty.");
        }
        throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Data:", data);

    // Look for video info in the JSON
    // Structure typically: data.mediaDetails[].video_info.variants[]
    
    // Check if media exists
    if (!data.mediaDetails || data.mediaDetails.length === 0) {
        throw new Error("Ten tweet nie zawiera mediów (lub API ich nie zwróciło).");
    }

    // Find the media item with video_info
    const videoMedia = data.mediaDetails.find(m => m.type === 'video' || m.type === 'animated_gif');
    
    if (!videoMedia || !videoMedia.video_info || !videoMedia.video_info.variants) {
         throw new Error("Znaleziono media, ale brak pliku wideo (może to samo zdjęcie?).");
    }

    const variants = videoMedia.video_info.variants;
    
    // Filter for mp4 and sort by bitrate (best quality last)
    const mp4Variants = variants
        .filter(v => v.content_type === 'video/mp4')
        .sort((a, b) => (a.bitrate || 0) - (b.bitrate || 0));

    if (mp4Variants.length === 0) {
        throw new Error("Brak wariantów MP4 (tylko HLS?).");
    }

    const bestVariant = mp4Variants[mp4Variants.length - 1];
    const videoUrl = bestVariant.url;
    const bitrate = bestVariant.bitrate || 0;

    console.log("Best Video URL:", videoUrl, "Bitrate:", bitrate);

    statusDiv.textContent = `Znaleziono wideo (${Math.round(bitrate / 1000)} kbps)! Rozpoczynam pobieranie...`;
    statusDiv.className = "success";

    const filename = `x_video_${tweetId}.mp4`;

    // Chrome uses chrome.downloads API
    chrome.downloads.download({
      url: videoUrl,
      filename: filename,
      saveAs: true
    }, (downloadId) => {
      if (chrome.runtime.lastError) {
        statusDiv.textContent = `Błąd pobierania: ${chrome.runtime.lastError.message}`;
        statusDiv.className = "error";
      } else {
        statusDiv.textContent = "Pobieranie rozpoczęte! ✓";
        statusDiv.className = "success";
        // Clear input after successful download
        urlInput.value = '';
      }
    });

  } catch (err) {
    console.error(err);
    statusDiv.textContent = `Błąd: ${err.message}`;
    statusDiv.className = "error";
  } finally {
    btn.disabled = false;
  }
}
