import swiper from "./swiper";

const loopDisabled = false;
const loopEnabled = true; // loop: false для hero блока

const heroSwiperLoop = loopEnabled;
const toursSwiperLoop = loopDisabled;

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

const toursSwiperOptions = {
  loop: toursSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="tours-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="tours-container"] [data-swiper="button-prev"]',
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
};


const heroSwiper = new swiper('[data-swiper="hero"]', heroSwiperOptions);
const toursSwiper = new swiper('[data-swiper="tours"]', toursSwiperOptions);

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

export {initSwiper, heroSwiper, toursSwiper};
