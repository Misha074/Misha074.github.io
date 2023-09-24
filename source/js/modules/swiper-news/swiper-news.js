function initNewsSwiper() {
  // eslint-disable-next-line no-undef
  let programsSwiper = new Swiper('.news__swiper', {
    // Буллеты пагинации (кликабельные)
    navigation: {
      nextEl: '.news__navigation-button--next',
      prevEl: '.news__navigation-button--prev',
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
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    allowTouchMove: true,
    breakpoints: {

      768: {
        slidesPerView: 2,
        // grid: {
        //   rows: 2,
        // },
        spaceBetween: 30,
      },

      1200: {
        direction: 'horizontal',
        grid: {
          rows: 1,
        },
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
  });

  return programsSwiper;
}

export {initNewsSwiper};
