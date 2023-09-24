function initReviewsSwiper() {
  // eslint-disable-next-line no-undef
  let programsSwiper = new Swiper('.reviews__swiper', {
    // Буллеты пагинации (кликабельные)
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.reviews__navigation-button--next',
      prevEl: '.reviews__navigation-button--prev',
    },
    watchSlidesProgress: true,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    allowTouchMove: true,
    breakpoints: {

      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },


      1200: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });

  return programsSwiper;
}

export {initReviewsSwiper};
