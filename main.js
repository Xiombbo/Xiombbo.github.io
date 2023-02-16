const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.main-menu');

menuButton.addEventListener('click', function() {
  mainMenu.classList.toggle('show');
});
