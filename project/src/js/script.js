(function () {
  const buttonDrop = document.getElementById('drop-button');
  const buttonDropSec = document.getElementById('drop-button-sec');
  const menu = document.getElementById('drop-menu');
  const menuSec = document.getElementById('drop-menu-sec');
  const changeWiewDestinations = document.getElementById('change-wiew');

  buttonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('is-active');
  });

  buttonDropSec.addEventListener('click', (e) => {
    e.preventDefault();
    menuSec.classList.toggle('is-active');
  });

  changeWiewDestinations.addEventListener('click', () => {
    let bootstrapClass = document.getElementById('boxWiew').children;
    let rowClass = document.querySelectorAll('.destinations-page__card');
    let imgClass = document.querySelectorAll('.destinations-page__card-img-wrapper');

    bootstrapClass = Array.prototype.slice.call(bootstrapClass);
    rowClass = Array.prototype.slice.call(rowClass);
    imgClass = Array.prototype.slice.call(imgClass);

    bootstrapClass.forEach((item, i) => {
      item.classList.toggle('col-md-4');
      item.classList.toggle('col-md-12');
    });

    rowClass.forEach((item, i) => {
      item.classList.toggle('row-card');
    });

    imgClass.forEach((item, i) => {
      item.classList.toggle('resized');
    })
  });
})();