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
