import {Form} from './modules/form-validate/form';
import {initSwiper, heroSwiper, toursSwiper, trainingSwiper, reviewsSwiper, handleSwiper, gallerySwiper} from './vendor/init-swiper';
import {findVideos} from './vendor/init-video';
import toggleIframe from './vendor/toggle-iframe';
import toggleMenu from './vendor/toggle-menu';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------
  initSwiper(heroSwiper);
  initSwiper(toursSwiper);
  initSwiper(trainingSwiper);
  initSwiper(reviewsSwiper);
  initSwiper(gallerySwiper);
  handleSwiper();
  toggleIframe();
  toggleMenu();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    form.init();
    window.form = form;
    findVideos();
  });
});

window.addEventListener('resize', () => {
  handleSwiper();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
