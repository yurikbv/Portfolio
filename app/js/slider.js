(function () {
  if(document.querySelector('.slider')){
    let slider = (() => {
      let inProcess = false;
      let duration = 300;

      let hideItems = (items,direction) => {
        Array.from(items).forEach((el) => el.style.top = -direction + '%');
      };

      let moveSlider = (container,direction,nextPrev) => {
        let items = container.querySelectorAll('.slider-btn__item');
        let unActiveItems = Array.from(items).filter((el) => !el.classList.contains('slider-btn__item--active'));
        let activeItem = container.querySelector('.slider-btn__item--active');
        direction = (direction === 'down') ? 100 : -100;

        hideItems(unActiveItems,direction);

        let counter = Array.from(items).findIndex((el) => el.classList.contains('slider-btn__item--active'));

        if(nextPrev === 'next'){
          counter++;
          if(counter >= items.length) counter = 0;
        }else {
          counter--;
          if(counter < 0) counter = items.length-1;
        }

        let reqItem = items[counter];
        activeItem.style.transition = 'all ' + duration +'ms linear';
        reqItem.style.transition = 'all ' + duration + 'ms linear';
        activeItem.style.top = direction + '%';
        reqItem.style.top = 0;

        setTimeout(() => {
          activeItem.style.transition = '';
          reqItem.style.transition = '';
          activeItem.classList.remove('slider-btn__item--active');
          activeItem.style.top = -direction + '%';
          reqItem.classList.add('slider-btn__item--active');
          inProcess = false;
        },300);

      };

      let moveSlideShow = (container, direction) => {
        let items = container.querySelectorAll('.slideshow__link');
        let itemsInfo = document.querySelectorAll('.slider__desc--item');
        let activeIndex = Array.from(items).findIndex((el) => el.classList.contains('slideshow__link--active'));
        let activeItem = container.querySelector('.slideshow__link--active');
        let activeItemInfo = document.querySelector('.slider__desc--active');

        if(direction === 'next') {
          activeIndex++;
          if(activeIndex >= items.length) activeIndex = 0;
        }else {
          activeIndex--;
          if(activeIndex < 0) activeIndex = items.length-1;
        }

        let reqItem = items[activeIndex];
        let reqItemInfo = itemsInfo[activeIndex];
        activeItem.style.opacity = 0;
        activeItemInfo.style.opacity = 0;

        setTimeout(() => {
          activeItem.style.display = 'none';
          activeItemInfo.style.display = 'none';
          activeItem.style.opacity = '';
          activeItemInfo.style.opacity = '';
          activeItem.classList.remove('slideshow__link--active');
          activeItemInfo.classList.remove('slider__desc--active');
          reqItem.style.display = 'block';
          reqItemInfo.style.display = 'block';
          reqItem.classList.add('slideshow__link--active');
          reqItemInfo.classList.add('slider__desc--active');
        }, duration);
      };

      let startSliderNext = () => {
        if(!inProcess){
          inProcess = true;
          moveSlider(document.querySelector('.slider__btn--next'),'down','next');
          moveSlider(document.querySelector('.slider__btn--prev'),'up', 'next');
          moveSlideShow(document.querySelector('.slideshow__display'),'next')
        }
      };

      let startSliderPrev = () => {
        if(!inProcess){
          inProcess = true;
          moveSlider(document.querySelector('.slider__btn--next'),'up','prev');
          moveSlider(document.querySelector('.slider__btn--prev'),'down', 'prev');
          moveSlideShow(document.querySelector('.slideshow__display'),'prev')
        }
      };

      let init = () => {
        document.querySelector('.shadow__next').addEventListener('click',startSliderNext);
        document.querySelector('.slider__arrow--next').addEventListener('click',startSliderNext);
        document.querySelector('.shadow__prev').addEventListener('click',startSliderPrev);
        document.querySelector('.slider__arrow--prev').addEventListener('click',startSliderPrev);
      };

      init();
    });

    document.addEventListener('DOMContentLoaded',slider);
  }
})();