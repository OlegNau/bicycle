"use strict";
let pageNavigation = document.querySelector(".navigation__list");
let headerToggle = document.querySelector(".navigation__toggle");
let shopBody = document.querySelector(".page__body");
let navigationLink = document.querySelectorAll(".navigation__link")

pageNavigation.classList.add("navigation--hide");

headerToggle.addEventListener("click", function () {
    pageNavigation.classList.toggle("navigation--hide");
    headerToggle.classList.toggle("navigation__toggle--close");
    shopBody.classList.toggle("page__body--hidden");
});

for (let i = 0; i < navigationLink.length; i++) {
  let navigationLinkButton = navigationLink[i];
  navigationLinkButton.addEventListener("click", function () {
    if (headerToggle.classList.contains("navigation__toggle--close")) {
        pageNavigation.classList.add("navigation--hide");
        shopBody.classList.remove("page__body--hidden");
        headerToggle.classList.remove("navigation__toggle--close")
    }
  });
}
