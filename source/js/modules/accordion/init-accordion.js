import {Accordions} from './accordions';
let accordions;
// Находим все контенты которые раскрыты в случае неподключения скрипта.
let accordionContent = document.querySelectorAll('.accordion__content--nojs');

for (let i = 0; i < accordionContent.length; i++) {
  // Находим все раскрытые контенты и удаляем класс который ответсвенен за их раскрытие.
  accordionContent[i].classList.remove('accordion__content--nojs');
}

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
