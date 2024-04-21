let reviews = document.querySelector('.reviews');
let body = document.querySelector('body');

// суть данной функции сводится к тому, что каждая модалка формируется для каждой карточки динамически. Причём модалка лежит внутри карточки отзыва. Потом эта модалка для корректной работы просто переностися в нужное место (в конец документа, после враппера)

function replaceReviewModals() {
  if (reviews && document.documentElement.clientWidth < 768) {
    while (reviews.querySelector('.modal')) {
      let currentReplacingModal = reviews.querySelector('.modal');
      body.appendChild(currentReplacingModal);
    }
  }
}

export {replaceReviewModals};
