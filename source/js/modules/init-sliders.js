import nouislider from '../vendor/nouislider';

const initSliders = () => {
  const slider = document.querySelectorAll('[data-range-slider]');
  const inputMin = document.querySelectorAll('[name="from"]');
  const inputMax = document.querySelectorAll('[name="to"]');
  const resetBtnElements = document.querySelectorAll('[data-reset]');

  if (slider) {
    for (let i = 0; i < slider.length; i++) {
      const minRange = parseInt(inputMin[i].getAttribute('data-min'), 10);
      const maxRange = parseInt(inputMax[i].getAttribute('data-max'), 10);
      const delta = maxRange - minRange;
      let step;

      if (delta <= 100) {
        step = 1;
      } else if (delta > 100 & delta <= 1000) {
        step = 10;
      } else if (delta > 1000 & delta <= 100000) {
        step = 100;
      } else if (delta > 100000 & delta <= 1000000) {
        step = 1000;
      }

      nouislider.create(slider[i], {
        start: [inputMin[i].value, inputMax[i].value],
        connect: true,
        tooltips: true,
        step,
        range: {
          'min': minRange,
          'max': maxRange,
        },
        format: {
          to: (value) => {
            if (Number.isInteger(value)) {
              return value.toFixed(0);
            }
            return value.toFixed(0);
          },
          from: (value) => {
            return parseFloat(value);
          },
        },
      });

      const tooltipInputMin = slider[i].querySelector('[data-handle]').querySelector('.noUi-tooltip');

      slider[i].noUiSlider.on('update', () => {
        const array = slider[i].noUiSlider.get();
        inputMin[i].value = array[0];
        inputMax[i].value = array[1];

        if (inputMin[i].value == minRange) {
          tooltipInputMin.style.display = 'none';
        } else {
          tooltipInputMin.style.display = 'block';
        }
      });

      inputMin[i].addEventListener('change', () => {
        slider[i].noUiSlider.set([inputMin[i].value, null]);
      });

      inputMax[i].addEventListener('change', () => {
        slider[i].noUiSlider.set([null, inputMax[i].value]);
      });

      for (let j = 0; j < resetBtnElements.length; j++) {
        resetBtnElements[j].addEventListener('click', () => {
          slider[i].noUiSlider.reset();
        });
      }
    }
  }
};

export {initSliders};
