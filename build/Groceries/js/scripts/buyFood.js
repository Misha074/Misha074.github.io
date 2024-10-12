import {dragFood} from './dragfood.js';
import {dragFoodTouch} from './dragFoodTouch.js';

const buyFood = () => {

  if ((window.matchMedia('(pointer: coarse)').matches)) {
    dragFoodTouch();

  } else {
    dragFood();
  }

};

export {buyFood};
