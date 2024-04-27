const street = document.querySelector(".street__styled-text");
const metro = document.querySelector(".metro__styled-text");

const bottomSwiper = new Swiper(".mySwiperBottom", {
  speed: 900,
  loop: true,
  cssMode: true,
});

const mainSwiper = new Swiper(".mySwiperMain", {
  speed: 900,
  loop: true,
  autoplay: {
    delay: 7000,
  },
  on: {
    slideChange: function () {
      bottomSwiper.slideTo(this.realIndex);
    },
  },
});
