const callWindow = document.querySelector('#call-window');
const callRequestBtn = document.querySelector('#call-request');
const callRequestBtn2 = document.querySelector('#call-request_2');
const callWindowClose = callWindow.querySelector('#close-window');
const callRequestOverlay = callWindow.querySelector('#call-overlay');

function handleOpenWindow(e) {
  callWindow.classList.add('modal-window_active');
  e.preventDefault();
}

function handleCloseWindow(e) {
  callWindow.classList.remove('modal-window_active');
  e.preventDefault();
}

callRequestBtn.addEventListener('click', handleOpenWindow);
callWindowClose.addEventListener('click', handleCloseWindow);
callRequestOverlay.addEventListener('click', handleCloseWindow);
callRequestBtn2.addEventListener('click', handleOpenWindow);
