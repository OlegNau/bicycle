'use strict';
let pageNavigation = document.querySelector('.navigation__list');
let headerToggle = document.querySelector('.navigation__toggle');

pageNavigation.classList.add('navigation--hide');

headerToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageNavigation.classList.toggle('navigation--hide');
  headerToggle.classList.toggle('navigation__toggle--close');
});