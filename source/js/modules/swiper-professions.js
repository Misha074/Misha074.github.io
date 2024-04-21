let professionsSwiper;

function initProfessionsSwiper() {
  let swiper = document.querySelector('.professions__swiper');
  if (swiper && document.documentElement.clientWidth < 768) {
    professionsSwiper = new Swiper('.professions__swiper', {
      // Стрелки переключения слайдов
      navigation: {
        nextEl: '.professions__swiper-button--next',
        prevEl: '.professions__swiper-button--prev',
      },
      watchSlidesProgress: true,
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      spaceBetween: 12,
      allowTouchMove: true,
    });
    return professionsSwiper;
  } else {
    if (professionsSwiper) {
      professionsSwiper.destroy();
    }
  }
  return 1;
}


export {initProfessionsSwiper};
