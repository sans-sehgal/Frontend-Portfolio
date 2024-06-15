document.addEventListener('DOMContentLoaded', () => {
    const jobDetails = document.querySelector('.jobs-details');
    
    if (jobDetails) {
      const jobDescription = jobDetails.innerText;
      highlightKeyInfo(jobDescription);
    }
  });
  
  function highlightKeyInfo(text) {
    const keywords = ["sponsor", "visa", "security clearance", "H-1B", "OPT", "CPT", "contract"];
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const highlightedText = text.replace(regex, `<span style="background-color: yellow;">${keyword}</span>`);
      document.body.innerHTML = document.body.innerHTML.replace(text, highlightedText);
    });
  }
  