document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: extractJobInfo
      }, (results) => {
        if (results[0] && results[0].result) {
          document.getElementById('info').innerHTML = results[0].result;
        }
      });
    });
  });
  
  function extractJobInfo() {
    const jobDescription = document.querySelector('.jobs-details')?.innerText || '';
    const keywords = ["sponsor", "visa", "security clearance", "H-1B", "OPT", "CPT"];
    const highlightedText = keywords.reduce((text, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      return text.replace(regex, `<span style="background-color: yellow;">${keyword}</span>`);
    }, jobDescription);
    return highlightedText;
  }
  