(function () {
  let slideShow = (function () {


    return {
      init: function () {
        $('.slideshow__link').on('click',function (e) {
          e.preventDefault();
          let $this = $(this);
          let container = $this.closest('.slideshow');
          let path = $this.attr('href');
          let display = container.find('.slideshow__display-pic');
          let preloader = $('.slideshow__preloader');
          let fadeOut = $.Deferred();
          let load = $.Deferred();
          
          display.fadeOut(function () {
            fadeOut.resolve()
          });

          fadeOut.done(function () {
            preloader.show();
            display.attr('src', path).on('load',function () {
              load.resolve();
            })
          });

          load.done(function () {
            preloader.hide();
            display.show();
          })
        })
      }
    }
  });

  $(function () {
    slideShow().init();
  })
})();