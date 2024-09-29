function initPortfolioSwiper() {

  let portfolioSwiper;

  if (document.getElementById('portfolio')) {
    portfolioSwiper = new Swiper('.portfolio__swiper', {
      slidesPerView: 'auto',
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
      autoplay: {
        delay: 1,
      },
      speed: 40000,
      loop: true,
    });
  }
  return portfolioSwiper;
}

export {initPortfolioSwiper};


