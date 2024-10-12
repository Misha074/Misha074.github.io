import {showPaymentButton} from './showPaymentButton.js';

const dragFoodTouch = () => {
  const foods = document.querySelectorAll('.food');
  const cart = document.querySelector('.cart');
  const cartInner = document.querySelector('.cart__incart-food');

  foods.forEach((food) => {
    food.addEventListener('touchstart', onTouchStart);
    food.addEventListener('touchmove', onTouchMove);
    food.addEventListener('touchend', onTouchEnd);
  });

  let activeFood = null;
  let initialPosition = {left: 0, top: 0}; // Для хранения начальной позиции элемента

  function onTouchStart(event) {
    activeFood = event.target.closest('.food');
    initialPosition.left = activeFood.offsetLeft; // Сохраняем начальную позицию
    initialPosition.top = activeFood.offsetTop;
  }

  function onTouchMove(event) {
    if (!activeFood) {
      return;
    }

    event.preventDefault();
    const touch = event.touches[0];

    // Получаем координаты относительно родительского элемента
    const rect = activeFood.parentNode.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;

    activeFood.style.left = offsetX - activeFood.offsetWidth / 2 + 'px';
    activeFood.style.top = offsetY - activeFood.offsetHeight / 2 + 'px';
  }

  function onTouchEnd() {
    if (!activeFood) {
      return;
    }

    const rectCart = cart.getBoundingClientRect();
    const rectFood = activeFood.getBoundingClientRect();

    if (
      rectFood.left < rectCart.right &&
      rectFood.right > rectCart.left &&
      rectFood.top < rectCart.bottom &&
      rectFood.bottom > rectCart.top
    ) {
      cartInner.append(activeFood);
      activeFood.style.left = '0';
      activeFood.style.top = '0';
      if (cartInner.children.length >= 3) {
        showPaymentButton();
      }

    } else {
      activeFood.style.left = '0';
      activeFood.style.top = '0';
    }

    activeFood = null;
  }
};

export {dragFoodTouch};

