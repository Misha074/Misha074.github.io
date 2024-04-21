import {initTabs} from './tabs/init-tabs';
let swiper; // Объявляем переменную в области видимости функции, чтобы иметь к ней доступ позже, и сделать дестрой.

function initAchievementsTabsSwiper() {
  let achievements = document.querySelector('.achievements');
  if (achievements) {
    let achievementsSwiper = achievements.querySelector('.achievements__swiper');
    let achievementsTabs = achievements.querySelector('.achievements__tabs');
    let tabsContent = achievements.querySelector('.achievements__tabs-content');
    let tabsElement = achievements.querySelectorAll('.achievements__tabs-element');
    let tabsElementFirst = achievements.querySelector('.achievements__tabs-element');
    let tabsButton = achievements.querySelectorAll('.tabs__control');
    let tabsButtonFirst = achievements.querySelector('.tabs__control');


    if (document.documentElement.clientWidth < 768 && !achievementsSwiper.classList.contains('achievements__swiper--inited')) {
      tabsContent.removeAttribute('data-tabs');
      tabsContent.classList.remove('tabs__content');

      tabsElement.forEach((elem) => {
        elem.removeAttribute('data-tabs');
        elem.classList.remove('tabs__element');
      });

      achievementsSwiper.classList.add('achievements__swiper--inited');
      // На этом ходу свайпер создан, а атрибуты таба удалены
      swiper = new Swiper('.achievements__swiper', {
        navigation: {
          nextEl: '.achievements__swiper-button--next',
          prevEl: '.achievements__swiper-button--prev',
        },
        watchSlidesProgress: true,
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        spacebetween: 0,
        allowTouchMove: true,
      });
      return;
    }

    if (document.documentElement.clientWidth < 768 && achievementsSwiper.classList.contains('achievements__swiper--inited')) {
      // На этом ходу свайпер уже существовал
    }

    if (document.documentElement.clientWidth >= 768 && achievementsSwiper.classList.contains('achievements__swiper--inited')) {
      swiper.destroy();
      // На этом ходу свайпер был уничтожен, а табы создались
      achievementsSwiper.classList.remove('achievements__swiper--inited');
      achievementsTabs.classList.add('achievementsTabs--inited');
      tabsContent.setAttribute('data-tabs', 'content');
      tabsContent.classList.add('tabs__content');
      tabsElement.forEach((elem) => {
        elem.setAttribute('data-tabs', 'element');
        elem.classList.add('tabs__element');
      });
      tabsElement.forEach((elem) => {
        elem.classList.remove('is-active');
      });
      tabsButton.forEach((elem) => {
        elem.classList.remove('is-active');
      });
      initTabs();
      tabsElementFirst.classList.add('is-active');
      tabsButtonFirst.classList.add('is-active');
      return;
    }

    if (document.documentElement.clientWidth >= 768 && achievementsTabs.classList.contains('achievementsTabs--inited')) {
      // На этом ходу свайпер уже был уничтоженным, а табы уже были созданными
    }

    if (document.documentElement.clientWidth >= 768 && !achievementsTabs.classList.contains('achievementsTabs--inited') && !achievementsSwiper.classList.contains('achievements__swiper--inited')) {
      initTabs();
    }
  }
}

export {initAchievementsTabsSwiper};
