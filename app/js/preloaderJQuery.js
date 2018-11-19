(function () {

  let preloader = (function () {
    let percentsTotal = 0,
      preloader = $('.preloader');

    let imgPath = $('*').map(function (i,el) {
      let background = $(el).css('background-image'),
        img = $(el).is('img'),
        path = '';

      if(background !== 'none'){
        path = background;
      }
      if(img){
        path = $(el).attr('src');
      }
      if(path) return path;
    });

    let setPercent = function (total, current) {
      let percents = Math.ceil(current/total * 100);
      $('.preloader__percents').text(percents + '%');
      if(percents >= 100) preloader.fadeOut();
    };

    let loadImages = function (images) {
      if(!images.length) preloader.fadeOut();
      
      images.forEach(function (img, i, images) {
        let fakeImage = $('<img>',{
          attr: {
            src: img
          }
        });
        fakeImage.on('load error',function () {
          percentsTotal++;
          setPercent(images.length,percentsTotal)
        })
      })
    };

    return {
      init: function () {
        let imgs = imgPath.toArray();
        loadImages(imgs);
      }
    }
  });

  $(function () {
    preloader().init();
  });

})();
