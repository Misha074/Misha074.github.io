let feedbackForm = document.getElementById('feedbackform');
let inputName = feedbackForm.querySelector('[type="text"]');
let inputTel = feedbackForm.querySelector('[type="tel"]');
let inputCheckbox = feedbackForm.querySelector('[type="checkbox"]');
let customCheckbox = document.getElementById('custom-checkbox');
let submitButton = feedbackForm.querySelector('[type="submit"]');

// Данная функция очищает поля формы после отправки
function resetForm() {
  feedbackForm.reset();
}

// Данная функция проверяет все ли обязательные поля заполнены. Если какое-то не заполнено,  то к нему будет добавлен класс "form__input--invalid" и оно покраснеет.
function inputValidate() {
  // Проверка происходит после нажатия пользователем кнопки "отправить форму"
  submitButton.addEventListener('click', () => {
    // Если инпут с именем не заполнен, т.е. он пустой, то навешиваем на него "invalid"
    if (!inputName.value) {
      inputName.classList.add('form__input--invalid');
    } else {
    // Если стал заполненным то снимаем
      inputName.classList.remove('form__input--invalid');
    }

    // Та же логика с телефоном
    if (!inputTel.value) {
      inputTel.classList.add('form__input--invalid');
    } else {
      inputTel.classList.remove('form__input--invalid');
    }

    // чекбокс
    if (inputCheckbox.checked) {
      customCheckbox.classList.remove('form__input--invalid');
    } else {
      customCheckbox.classList.add('form__input--invalid');
    }

    if ((!inputName.value) || (!inputTel.value)) {
      event.preventDefault();
    }

    if ((inputName.value) && (inputTel.value)) {
      setTimeout(resetForm, 500);
    }
  });

  inputName.oninput = function () {
    inputName.value = inputName.value.replace(/[^a-zA-Zа-яА-Я,' ',-]/g, '');
    if (inputName.value.length < 1) {
      inputName.classList.add('form__input--invalid');
    } else {
      inputName.classList.remove('form__input--invalid');
    }
  };

  inputTel.oninput = function () {
    inputTel.value = inputTel.value.replace(/[^0-9,+,(),-]/g, '');
    if (inputTel.value.length < 1) {
      inputTel.classList.add('form__input--invalid');
    } else {
      inputTel.classList.remove('form__input--invalid');
    }
  };
}

export {inputValidate};
