import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

import './modules/nav-toggle/nav-toggle';
import './modules/filter-buttons-active/filter-buttons-active';
import {initIntroSwiper} from './modules/swiper-intro/swiper-intro';
import {initProgramsSwiper} from './modules/swiper-programs/swiper-programs';
import {initTabs} from './modules/tabs/init-tabs';
import {initNewsSwiper} from './modules/swiper-news/swiper-news';
import {initAccordions} from './modules/accordion/init-accordion';
import {initReviewsSwiper} from './modules/swiper-reviews/swiper-reviews';
import {initLeaflet} from './modules/leaflet/init-leaflet';
import {inputValidate} from './modules/input-validate/input-validate';
import {inputValidateModal} from './modules/input-validate-modal/input-validate-modal';

import './modules/scroll/scroll';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  initIntroSwiper();


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initProgramsSwiper();
    initTabs();
    initNewsSwiper();
    initAccordions();
    initReviewsSwiper();
    initLeaflet();
    inputValidate();
    inputValidateModal();

    initModals();
  });
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
