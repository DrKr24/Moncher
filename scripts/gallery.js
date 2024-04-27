const routes = document.querySelectorAll(".route");
const routeStreets = document.querySelectorAll(".route__street");
const routeMetros = document.querySelectorAll(".route__metro");
const galleryItems = document.querySelectorAll(".gallery__item");
const modalGallery = document.querySelector(".modal-gallary");
const modalGalleryExitButton = document.querySelector(
  ".modal-gallary__header__exit"
);

const swiper = new Swiper(".mySwiper1", {
  speed: 400,
  cssMode: true,
});

function clearStyle(route, indexI, indexJ) {
  if (indexI === indexJ) {
    return;
  }
  route.classList.remove("route-active");
  routeStreets[indexJ].classList.remove("route__street-active");
  routeMetros[indexJ].classList.remove("route__metro-active");
}

function routeHandler(route, indexI) {
  route.classList.add("route-active");
  routeStreets[indexI].classList.add("route__street-active");
  routeMetros[indexI].classList.add("route__metro-active");
  routes.forEach((route, indexJ) => clearStyle(route, indexI, indexJ));
  swiper.slideTo(indexI);
}

function scaleDown() {
  let unActiveSlides = swiper.slides
    .slice(0, swiper.activeIndex)
    .concat(swiper.slides.slice(swiper.activeIndex + 1));

  unActiveSlides.forEach((slide) => {
    let elements = slide.querySelectorAll(".gallery__item");
    elements.forEach((element) => {
      element.style.transform = "scale(0.4)";
    });
  });
}

function scaleUp() {
  let activeSlide = swiper.slides[swiper.activeIndex];
  let currentElements = activeSlide.querySelectorAll(".gallery__item");
  currentElements.forEach((element) => {
    element.style.transform = "scale(1)";
  });
}

routes.forEach((route, index) => {
  route.addEventListener("click", () => routeHandler(route, index));
});

swiper.on("slideChange", function () {
  scaleDown();
  scaleUp();
});

scaleUp();
addEventListenerToAllItems();
