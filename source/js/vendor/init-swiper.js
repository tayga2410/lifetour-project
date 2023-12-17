import swiper from "./swiper";

const loopDisabled = false;
const loopEnabled = true; // loop: false для hero блока

const heroSwiperLoop = loopEnabled;
const toursSwiperLoop = loopDisabled;
const trainingSwiperLoop = loopDisabled;
const reviewsSwiperLoop = loopDisabled;
const advantagesSwiperLoop = loopDisabled;
const gallerySwiperLoop = loopEnabled;

let desktop = window.matchMedia('(min-width: 1200px)');
let advantagesSwiper;

const heroSwiperOptions = {
  loop: heroSwiperLoop,
  pagination: {
    el: '[data-swiper="pagination"]',
    clickable: true,
  },
  breakpoints: {
    350: {
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
    350: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
};

const trainingSwiperOptions = {
  loop: trainingSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="training-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="training-container"] [data-swiper="button-prev"]',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 0
    },
  },
};

const reviewsSwiperOptions = {
  loop:reviewsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="reviews-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="reviews-container"] [data-swiper="button-prev"]',
  },
  slidesPerView: 1,
};

const advantagesSwiperOptions = {
  loop:advantagesSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="advantages-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="advantages-container"] [data-swiper="button-prev"]',
  },
  spaceBetween: 30,
  initialSlide: 1,
  slidesPerView: 3,
};

const gallerySwiperOptions = {
  loop: gallerySwiperLoop,
  navigation: {
    nextEl: '[data-swiper="gallery-container"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="gallery-container"] [data-swiper="button-prev"]',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
};


const heroSwiper = new swiper('[data-swiper="hero"]', heroSwiperOptions);
const toursSwiper = new swiper('[data-swiper="tours"]', toursSwiperOptions);
const trainingSwiper = new swiper('[data-swiper="training"]',  trainingSwiperOptions);
const reviewsSwiper = new swiper('[data-swiper="reviews"]',  reviewsSwiperOptions);
const gallerySwiper = new swiper('[data-swiper="gallery"]',  gallerySwiperOptions);

function handleSwiper() {
  if (desktop.matches) {
    if (!advantagesSwiper) {
      advantagesSwiper = new swiper('[data-swiper="advantages"]', advantagesSwiperOptions);
    }
  } else {
    if (advantagesSwiper) {
      advantagesSwiper.destroy();
      advantagesSwiper = null;
    }
  }
}

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

export {initSwiper, heroSwiper, toursSwiper, trainingSwiper, reviewsSwiper, handleSwiper, gallerySwiper};
