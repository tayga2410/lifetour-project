import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initSwiper, heroSwiper, toursSwiper, trainingSwiper, reviewsSwiper, advantagesSwiper} from './vendor/init-swiper';
import {findVideos} from './vendor/init-video';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initSwiper(heroSwiper);
  initSwiper(toursSwiper);
  initSwiper(trainingSwiper);
  initSwiper(reviewsSwiper);
  initSwiper(advantagesSwiper);
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    findVideos();
  });
});


function toggleMenu() {
  const buttons = document.querySelectorAll('[data-menu="button"]');
  const navList = document.querySelectorAll('[data-menu="menu"]');
  const nav = document.querySelector('[data-menu="layer"]');
  const logo = document.querySelector('[data-menu="menu-logo"]');
  const telephone = document.querySelector('[data-menu="menu-telephone"]');
  const overlay = document.querySelector('[data-menu="menu-overlay"]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {

      nav.classList.toggle('nav--is-closed');
      nav.classList.toggle('nav--is-opened');
      logo.classList.toggle('nav__logo--is-closed');
      logo.classList.toggle('nav__logo--is-opened');
      telephone.classList.toggle('nav__telephone--is-closed');
      telephone.classList.toggle('nav__telephone--is-opened');

      overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';

      navList.forEach((listItem) => {
        const isClosed = listItem.classList.contains('nav__list--is-closed');
        const iconMenuIsClosed = document.querySelector('[data-menu="menu-is-closed"]');
        const iconMenuIsOpened = document.querySelector('[data-menu="menu-is-opened"]');

        if (isClosed) {
          listItem.classList.remove('nav__list--is-closed');
          listItem.style.display = 'block';

          iconMenuIsClosed.style.display = 'none';
          iconMenuIsOpened.style.display = 'block';
        } else {
          listItem.classList.add('nav__list--is-closed');
          listItem.style.display = 'none';

          iconMenuIsClosed.style.display = 'block';
          iconMenuIsOpened.style.display = 'none';
        }
      });
    });
  });
}
toggleMenu();

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
