'use strict';
let pageNavigation = document.querySelector('.navigation__list');
let headerToggle = document.querySelector('.navigation__toggle');

pageNavigation.classList.add('navigation--hide');

headerToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageNavigation.classList.toggle('navigation--hide');
  headerToggle.classList.toggle('navigation__toggle--close');
});
/*
  if (headerToggle.classList.contains('navigation__toggle--close')) {
    pageNavigation.classList.add('navigation--hide');
    headerToggle.classList.remove('navigation__toggle--close');
  } else {
    pageNavigation.classList.remove('navigation--hide');
    headerToggle.classList.add('navigation__toggle--close');
  }

*/
