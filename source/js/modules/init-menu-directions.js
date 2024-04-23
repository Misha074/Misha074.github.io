import {initAccordions} from '../vendor/init-accordion';

export const initMenuDirections = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const accordionElements = document.querySelectorAll('[data-modal="burger"] [data-directions="submenu"]');
    const mobileAccordionElements = Array.from(accordionElements).slice(accordionElements.length / 2);
    for (let i = 0; i < mobileAccordionElements.length; i++) {
      let submenuItems = mobileAccordionElements[i].querySelectorAll('.list__item');
      if (submenuItems.length > 7) {
        submenuItems = Array.from(submenuItems).map((el, index) => {
          if (index % 2 || index > 12) {
            el.style.display = 'none';
          }
        });
        submenuItems = submenuItems.slice(7);
      }
    }
    initAccordions();
  } else {
    const directionMenu = document.querySelector('[data-directions="menu"]');
    const directionMenuElements = directionMenu.querySelectorAll('[data-directions="submenu"]');
    let activeSubMenu = 0;

    for (let i = 0; i < directionMenuElements.length; i++) {

      const onDocumentKeydown = (evt) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          closeDirectionElement(i);
        }
      };

      const onCloseClickDocument = (evt) => {
        if (!evt.target.closest('[data-directions="submenu"].is-active')) {
          closeDirectionElement(i);
        }
      };

      const onDirectionElClick = (evt) => {
        if (activeSubMenu === 0) {
          openDirectionElement();
          activeSubMenu = evt.target;
        } else {
          for (let j = 0; j < directionMenuElements.length; j++) {
            closeDirectionElement(j);
          }
          openDirectionElement();
        }
      };

      const openDirectionElement = () => {
        directionMenuElements[i].classList.add('is-active');
        activeSubMenu = directionMenuElements[i].querySelector('ul');
        activeSubMenu.classList.add('is-active');
        document.addEventListener('keydown', onDocumentKeydown);
        document.addEventListener('click', onCloseClickDocument);
      };

      const closeDirectionElement = (count) => {
        directionMenuElements[count].classList.remove('is-active', 'focus-visible');
        activeSubMenu.classList.remove('is-active');
      };

      directionMenuElements[i].addEventListener('click', onDirectionElClick);
    }
  }
};
