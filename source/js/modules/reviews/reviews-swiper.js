// импортируем данную функцию, чтобы после дестроя свайпера первые три отзыва.
import {showThreeReviews} from './reviews-show';

// данные переменные нужны будут для работы с DOM-деревом.
let reviewsList = document.querySelector('.reviews__list');
let showMoreButton = document.querySelector('.reviews__show-more-button');
let swiperButtons = document.querySelector('.reviews__swiper-buttons-container');
// данная переменная вынесена в глобальную область видимости, чтобы у нас была возможность сделать swiper.destroy на экранах >=768
let reviewsSwiper;

function initReviewsSwiper() {
  let swiper = document.querySelector('.reviews__swiper');
  // Логика следующая: в первый момент только первые три карточки показаны. Остальные display: none; Чтобы слайдер правильно инициализировал все слайды из всех карточек, необходимо чтобы все карточки имели свойство display: block. Т.е. мы удаляем со всех карточек класс "reviews__list-item--unshowed". А также скрываем кнопку "загрузить ещё" На мобильном устройстве она не нужна.
  if (swiper && document.documentElement.clientWidth < 768) {
    let allReviews = reviewsList.querySelectorAll('.reviews__list-item');
    allReviews.forEach((element) => {
      element.classList.remove('reviews__list-item--unshowed');
    });
    showMoreButton.classList.add('reviews__show-more-button--unshowed');
    swiperButtons.classList.remove('reviews__swiper-buttons-container--unshowed');

    reviewsSwiper = new Swiper('.reviews__swiper', {
      // Стрелки переключения слайдов
      navigation: {
        nextEl: '.reviews__swiper-button--next',
        prevEl: '.reviews__swiper-button--prev',
      },
      watchSlidesProgress: true,
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 22,
      allowTouchMove: true,
    });
  }
  if (reviewsSwiper && document.documentElement.clientWidth >= 768) {
    // Здесь задача обратная. Сначала дестроим слайдер. Затем скрываем все карточки через добавление класса "reviews__list-item--unshowed". Показываем кнопку. И показываем первые три карточки через функцию showThreeReviews()
    reviewsSwiper.destroy();
    let allReviews = reviewsList.querySelectorAll('.reviews__list-item');
    allReviews.forEach((element) => {
      element.classList.add('reviews__list-item--unshowed');
    });
    showThreeReviews();
    showMoreButton.classList.remove('reviews__show-more-button--unshowed');
    swiperButtons.classList.add('reviews__swiper-buttons-container--unshowed');
  }
  return 1;
}


export {initReviewsSwiper};
