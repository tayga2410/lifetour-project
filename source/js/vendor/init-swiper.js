import swiper from "./swiper";

const loopDisabled = false;
const loopEnabled = true; // loop: false для hero блока

const heroSwiperLoop = loopEnabled;
const toursSwiperLoop = loopDisabled;
const trainingsSwiperLoop = loopDisabled;

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
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    350: {
      slidesPerView: 1,
    },
  },
};

const trainingSwiperOptions = {
  loop: trainingsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="training-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="training-container"] [data-swiper="button-prev"]',
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    350: {
      slidesPerView: 1,
    },
  },
};


const heroSwiper = new swiper('[data-swiper="hero"]', heroSwiperOptions);
const toursSwiper = new swiper('[data-swiper="tours"]', toursSwiperOptions);
const trainingSwiper = new swiper('[data-swiper="training"]',  trainingSwiperOptions);

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

export {initSwiper, heroSwiper, toursSwiper, trainingSwiper};
