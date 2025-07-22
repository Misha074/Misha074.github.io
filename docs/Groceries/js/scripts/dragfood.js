import {showPaymentButton} from './showPaymentButton.js';

const dragFood = () => {
  const foods = document.querySelectorAll('.food');
  const cart = document.querySelector('.cart');
  const cartInner = document.querySelector('.cart__incart-food');

  for (const food of foods) {
    // Обработчик события dragstart
    food.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('foodId', food.id); // Сохраняем id перетаскиваемого продукта
    });
  }

  // Обработчик события dragover для cart
  cart.addEventListener('dragover', (e) => {
    e.preventDefault(); // Позволяет сбросить элемент
  });

  // Обработчик события drop для cart
  cart.addEventListener('drop', (e) => {
    e.preventDefault(); // Предотвращает действие по умолчанию

    const inCartFoodId = e.dataTransfer.getData('foodId'); // Получаем id перетаскиваемого продукта
    const inCartfood = document.getElementById(inCartFoodId); // Находим элемент по id

    if (inCartfood) {
      cartInner.append(inCartfood); // Переносим элемент food в cart
      if (cartInner.children.length >= 3) {
        showPaymentButton();
      }
    }
  });
};

export {dragFood};
