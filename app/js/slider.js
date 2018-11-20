(function () {
  let slider = (() => {
    let inProcess = false;

    let moveSlider = (container,direction) => {
      let items = container.querySelectorAll('.slider-btn__item');
      let activeItem = container.querySelector('.slider-btn__item--active');
      direction = (direction === 'down') ? 100 : -100;
      let counter = Array.from(items).findIndex((el) => el.classList.contains('slider-btn__item--active'));
      counter++;
      if(counter >= items.length) counter = 0;
      let reqItem = items[counter];

      activeItem.style.top = direction + '%';
      reqItem.style.top = 0;
      activeItem.style.display = 'none';
      activeItem.classList.remove('slider-btn__item--active');
      // activeItem.style.top = -direction + '%';
      activeItem.style.display = '';
      reqItem.classList.add('slider-btn__item--active');
      inProcess = false;
    };

    let startSlider = () => {
      if(!inProcess){
        inProcess = true;
        moveSlider(document.querySelector('.slider__btn--next'),'down');
        moveSlider(document.querySelector('.slider__btn--prev'),'up');
      }
    };

    let init = () => {
      document.querySelector('.shadow__next').addEventListener('click',startSlider);
      document.querySelector('.slider__arrow--next').addEventListener('click',startSlider);
    };

    init();
  });

  document.addEventListener('DOMContentLoaded',slider);
})();