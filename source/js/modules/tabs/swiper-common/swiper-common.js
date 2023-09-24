function initCommonSwiper() {
  // eslint-disable-next-line no-undef
  let programsSwiper = new Swiper('.common__swiper', {
    // Буллеты пагинации (кликабельные)
    navigation: {
      nextEl: '.common__navigation-button--next',
      prevEl: '.common__navigation-button--prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    watchSlidesProgress: true,
    direction: 'horizontal',
    grid: {
      rows: 2,
    },
    slidesPerView: 3,
    loop: false,
    spaceBetween: 0,
    allowTouchMove: true,
    breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
  });

  return programsSwiper;
}

export {initCommonSwiper};
