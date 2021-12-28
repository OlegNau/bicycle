"use strict";
let pageNavigation = document.querySelector(".navigation");
let navigationList = document.querySelector(".navigation__list")
let headerToggle = document.querySelector(".navigation__toggle");
let shopBody = document.querySelector(".page__body");
let navigationLink = document.querySelectorAll(".navigation__link")

pageNavigation.classList.remove("navigation--open");
navigationList.classList.add("navigation__list--hide");

headerToggle.addEventListener("click", function () {
    pageNavigation.classList.toggle("navigation--open");
    navigationList.classList.toggle("navigation__list--hide");
    headerToggle.classList.toggle("navigation__toggle--close");
    shopBody.classList.toggle("page__body--hidden");
});

for (let i = 0; i < navigationLink.length; i++) {
  let navigationLinkButton = navigationLink[i];
  navigationLinkButton.addEventListener("click", function () {
    if (headerToggle.classList.contains("navigation__toggle--close")) {
        pageNavigation.classList.remove("navigation--open");
        navigationList.classList.add("navigation__list--hide");
        shopBody.classList.remove("page__body--hidden");
        headerToggle.classList.remove("navigation__toggle--close");
    }
  });
}
