function initIntroSwiper() {
  // eslint-disable-next-line no-undef
  let introSwiper = new Swiper('.intro__swiper', {
    // Автоматическое перелистывание слайдов
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Буллеты пагинации (кликабельные)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    watchSlidesProgress: true,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spacebetween: 0,
    allowTouchMove: true,
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });

  return introSwiper;
}

export {initIntroSwiper};
