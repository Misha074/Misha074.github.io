import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  if (window.innerWidth >= 768) {
    tabs = new Tabs();
    // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
    window.tabs = tabs;
  }

};

export {initTabs, tabs};
