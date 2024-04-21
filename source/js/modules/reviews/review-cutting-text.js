let reviews = document.querySelector('.reviews');
let reviewsTextsArray = document.querySelectorAll('.review__main-text');
const fullTexts = Array.from(reviewsTextsArray).map((element) => element.textContent);

function reviewCuttingText() {
  if (document.documentElement.clientWidth < 768) {
    reviewsTextsArray.forEach((element) => {
      let text = element.textContent;
      let cuttedText = text.slice(0, 394);
      element.textContent = cuttedText + '...';
    });
  } else {
    reviewsTextsArray.forEach((element, index) => {
      element.textContent = fullTexts[index];
    });
  }
}

if (reviews) {
  reviewCuttingText();
}

export {reviewCuttingText};
