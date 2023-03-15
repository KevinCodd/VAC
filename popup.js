document.addEventListener('DOMContentLoaded', () => {
    //toggle boxes
    const hideBoard = document.getElementById('hideBoard');
    const hideMoveHistory = document.getElementById('hideMoveHistory');
    const hideMaterial = document.getElementById('hideMaterial');
  
    hideBoard.addEventListener('change', handleHideBoard);
    hideMoveHistory.addEventListener('change', handleHideMoveHistory);
    hideMaterial.addEventListener('change', handleHideMaterial);

    function handleHideBoard() {
      if (hideBoard.checked) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'hideBoard' });
          });
        
      } else {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'unhideBoard' });
          });
      }
    }
  
    function handleHideMoveHistory() {
      if (hideMoveHistory.checked) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'hideMoveHistory' });
        });
      } else {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'unHideMoveHistory' });
        });
      }
    }
 

  function handleHideMaterial() {
    if (hideMaterial.checked) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'hideMaterial' });
        });
    } else {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'unhideMaterial' });
        });
    }
  }
});










