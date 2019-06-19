(function () {
  const buttonDrop = document.getElementById('drop-button');
  const buttonDropSec = document.getElementById('drop-button-sec');
  const menu = document.getElementById('drop-menu');
  const menuSec = document.getElementById('drop-menu-sec');

  buttonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('is-active');
  });

  buttonDropSec.addEventListener('click', (e) => {
    e.preventDefault();
    menuSec.classList.toggle('is-active');
  })
})();