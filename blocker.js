
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'hideBoard') {
        document.querySelector(".round__app__board.main-board").style.visibility = "hidden";
    }
    if (request.action === 'unhideBoard') {
        document.querySelector(".round__app__board.main-board").style.visibility = "visible";
    }
    if (request.action === 'hideMoveHistory') {
        const rm6 = document.getElementsByTagName("rm6");
        rm6[0].style.visibility="hidden";
    }
    if (request.action === 'unHideMoveHistory') {
        const rm6 = document.getElementsByTagName("rm6");
        rm6[0].style.visibility="visible";
    }
    if (request.action === 'hideMaterial') {
        document.querySelector(".material.material-top").style.visibility = "hidden";
        document.querySelector(".material.material-bottom").style.visibility = "hidden";
    }
    if (request.action === 'unhideMaterial') {
        document.querySelector(".material.material-top").style.visibility = "visible";
        document.querySelector(".material.material-bottom").style.visibility = "visible";
    }

  });


