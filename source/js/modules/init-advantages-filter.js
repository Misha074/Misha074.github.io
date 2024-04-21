export const initAdvantagesFilter = () => {
  if (document.querySelector('[data-advantages="filter"]')) {
    const filter = document.querySelector('[data-advantages="filter"]');
    const filterElements = filter.querySelectorAll('[data-advantages="filter-item"]');

    const selectElement = (evt) => {
      const parentElement = evt.currentTarget;
      const currentElement = parentElement.closest('label').querySelector('input');
      const titleCurrentElement = parentElement.closest('label').querySelector('input').value;
      const svgElement = parentElement.querySelector('use');
      const svgUrlElement = svgElement.getAttribute('xlink:href');
      const titleTextColorElement = parentElement.closest('label').querySelector('.custom-toggle__label');

      if (svgUrlElement === `#${titleCurrentElement}-colorless`) {
        svgElement.setAttribute('xlink:href', `#${titleCurrentElement}-color`);
        currentElement.setAttribute('checked', '');
        titleTextColorElement.classList.add(`custom-toggle__label--${titleCurrentElement}`);
      } else {
        svgElement.setAttribute('xlink:href', `#${titleCurrentElement}-colorless`);
        currentElement.removeAttribute('checked');
        titleTextColorElement.classList.remove(`custom-toggle__label--${titleCurrentElement}`);
      }
    };

    const onFilterElementClick = (evt) => {
      selectElement(evt);
    };

    for (let i = 0; i < filterElements.length; i++) {
      filterElements[i].addEventListener('click', onFilterElementClick);
    }
  }
};
