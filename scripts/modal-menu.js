const hamburgerButton = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__list__mobile");

let menutoggle = false;

function menuHandler() {
  menu.classList.toggle("nav__list__mobile_disable");
  if (!menutoggle) {
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });
    menutoggle = true;
    return;
  }
  document.removeEventListener("touchmove", preventScroll, { passive: false });
  document.removeEventListener("wheel", preventScroll, { passive: false });
  menutoggle = false;
}

function preventScroll(e) {
  e.preventDefault();
}

hamburgerButton.addEventListener("click", menuHandler);
