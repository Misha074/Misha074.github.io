import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {initSliders} from './modules/init-sliders.js';
import {initMenuDirections} from './modules/init-menu-directions.js';
import {initAdvantagesFilter} from './modules/init-advantages-filter.js';
import {CustomSelect} from './modules/select/custom-select';
import './modules/init-scrollbar';
import {initProfessionsSwiper} from './modules/swiper-professions.js';
import {initCourseCutText, courseCutText} from './modules/school-cut-text.js';
import './modules/reviews/reviews-show.js';
import {reviewCuttingText} from './modules/reviews/review-cutting-text.js';
import {initReviewsSwiper} from './modules/reviews/reviews-swiper.js';
import {replaceReviewModals} from './modules/reviews/review-replace-modal.js';
import {initAchievementsTabsSwiper} from './modules/achievements-tabs-swiper.js';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------
  initMenuDirections();
  initAdvantagesFilter();
  initSliders();
  initCourseCutText();
  initProfessionsSwiper();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initAchievementsTabsSwiper();
    const select = new CustomSelect();
    select.init();
    replaceReviewModals();
    reviewCuttingText();
    initReviewsSwiper();
    uploadFile();
    uploadImageDrop();
  });

  window.addEventListener('resize', () => {
    initMenuDirections();
    courseCutText();
    reviewCuttingText();
    initReviewsSwiper();
    initAchievementsTabsSwiper();
    initProfessionsSwiper();
    replaceReviewModals();
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

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
