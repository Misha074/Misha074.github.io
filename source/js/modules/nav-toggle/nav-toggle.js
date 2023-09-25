let nav = document.querySelector('.header__nav');
let navToggle = nav.querySelector('.nav__toggle');
let navList = nav.querySelector('.nav__list');
let untouchableBlock = document.querySelector('.header__untouchable-block');
let body = document.getElementById('body');
let links = nav.querySelectorAll('.nav__item-link');

navToggle.classList.remove('nav__toggle--nojs');
navList.classList.remove('nav__list--nojs');
nav.classList.remove('nav--nojs');


function openMenu() {
  navList.classList.remove('nav__list--closed');
  navToggle.classList.remove('nav__toggle--closed');
  nav.classList.remove('nav--closed');
  body.classList.add('unscrolling');
  untouchableBlock.classList.add('header__untouchable-block--show');
  links.forEach((element) => element.setAttribute('tabindex', 1));
  links[0].focus();
}

function closeMenu() {
  navList.classList.add('nav__list--closed');
  navToggle.classList.add('nav__toggle--closed');
  nav.classList.add('nav--closed');
  body.classList.remove('unscrolling');
  untouchableBlock.classList.remove('header__untouchable-block--show');
  links.forEach((element) => element.setAttribute('tabindex', -1));
}

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    openMenu();
    untouchableBlock.addEventListener('click', () => {
      closeMenu();
      untouchableBlock.removeEventListener('click', () => {});
    });
  } else {
    closeMenu();
  }
});
