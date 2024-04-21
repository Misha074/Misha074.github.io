const listsArray = document.querySelectorAll('[data-list="group-list"]');

if (listsArray) {

  for (let i = 0; i < listsArray.length; i++) {
    const itemsArray = listsArray[i].querySelectorAll('li');

    if (itemsArray.length > 5) {
      listsArray[i].classList.add('checkbox__list--scroll');

      let totalHeight = 0;
      let elementMargin = 0;

      for (let j = 0; j < 5; j++) {
        const elementHeight = itemsArray[j].offsetHeight;
        elementMargin = parseInt(getComputedStyle(itemsArray[j]).marginBottom, 10);
        totalHeight = totalHeight + elementHeight + elementMargin;
      }
      totalHeight = totalHeight - elementMargin;
      listsArray[i].style.height = `${totalHeight}px`;
    }
  }
}
