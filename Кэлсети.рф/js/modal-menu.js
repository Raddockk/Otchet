const callModalMenu = document.querySelector('#call-menu');
const callMenuRequest = document.querySelector('#menu-request');
const callMenuOverlay = callModalMenu.querySelector('#call-menu-overlay');

function handleOpenModalMenu(e) {
    e.preventDefault();
    callModalMenu.classList.toggle('modal-menu_active');
}

function handleCloseModalMenu(e) {
    e.preventDefault();
    callModalMenu.classList.remove('modal-menu_active');
}

callMenuRequest.addEventListener('click', handleOpenModalMenu);
callMenuOverlay.addEventListener('click', handleCloseModalMenu);