import swiper from "./swiper";

const loopDisabled = false;
const loopEnabled = true; // loop: false для hero блока

const heroSwiperLoop = loopEnabled;

const heroSwiperOptions = {
  loop: heroSwiperLoop,
  pagination: {
    el: '[data-swiper="pagination"]',
    clickable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
    },
  },
};


const heroSwiper = new swiper('[data-swiper="hero"]', heroSwiperOptions);

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

export {initSwiper, heroSwiper};
