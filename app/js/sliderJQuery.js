(function () {
  let slider = (function () {
    let counter = 1;
    let duration = 300;
    let inProcess = false;
    let moveSlide = function (container, direction) {
      let items = container.find('.slider-btn__item');
      let activeItem = items.filter('.slider-btn__item--active');
      direction = direction === 'down' ? 100 : -100;

      if(counter >= items.length) counter = 0;

      let reqItem = items.eq(counter);

      activeItem.animate({
        'top': direction + '%'
      }, duration);

      reqItem.animate({
        'top': 0
      }, duration,function () {
        activeItem.removeClass('slider-btn__item--active').css('top',-direction + '%');
        $(this).addClass('slider-btn__item--active');
        inProcess = false;
      });
    };

    let startSlider = function () {
      if(!inProcess){
        inProcess = true;
        moveSlide($('.slider__btn--next'),'down');
        moveSlide($('.slider__btn--prev'),'up');
        counter++;
      }
    };

    return {
      init: function () {
        $('.shadow').on('click', startSlider);
        $('.slider__arrow').on('click',startSlider);
      }
    }
  });

  $(function () {
    slider().init();
  })
})();