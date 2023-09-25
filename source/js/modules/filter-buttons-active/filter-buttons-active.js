// Get the container element
let filter = document.querySelector('.filter__list');

// Get all buttons with class='btn' inside the container
let btns = filter.querySelectorAll('.filter__button');

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.querySelectorAll('.filter__button--active');
    current[0].className = current[0].className.replace(' filter__button--active', '');
    // eslint-disable-next-line no-invalid-this
    this.className += ' filter__button--active';
  });
}
