let reviews = document.querySelector('.reviews');
let reviewsList = document.querySelector('.reviews__list');
let showMoreButton = document.querySelector('.reviews__show-more-button');

function showThreeReviews() {
  for (let i = 0; i < 3; i++) {
    let review = reviewsList.querySelector('.reviews__list-item--unshowed');
    if (review) {
      review.classList.remove('reviews__list-item--unshowed');
    } else {
      showMoreButton.classList.add('reviews__show-more-button--unshowed');
    }
    review = reviewsList.querySelector('.reviews__list-item--unshowed');
    if (review === null) {
      showMoreButton.classList.add('reviews__show-more-button--unshowed');
    }
  }
}

if (reviews) {
  // Данная функция срабатывает в момент загрузки страницы, чтобы показать пользователю три первые карточки
  showThreeReviews();
  // по нажатию на кнопку "загрузить ещё" показываются ещё три карточки
  showMoreButton.addEventListener('click', () => {
    showThreeReviews();
  });
}

export {showThreeReviews};

