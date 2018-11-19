(function () {
  'use strict';

  let preloader = () => {
    let percentsTotal = 0;
    let preloader = document.querySelector('.preloader');

    let imgPath = Array.from(document.body.querySelectorAll('*')).filter((el) => {
      if(el.hasAttribute('background-image')) return el;
      if(el.tagName.toLowerCase() === 'img')  return el;
    }).map((element) => {
      if(element.hasAttribute('background-image')) return element.getAttribute('background-image');
      if(element.tagName.toLowerCase() === 'img')  return element.getAttribute('src');
    });

    let setPercent = (total, current) => {
      let percents = Math.ceil(current/total * 100);
      preloader.querySelector('.preloader__percents').textContent = percents + '%';
      if(percents >= 100) preloader.style.display = 'none';
    };

    let loadImages = (images) => {
      if(!images.length) preloader.style.display = 'none';
      images.forEach((img, i, images) => {
        let fakeImage = document.createElement('img');
        fakeImage.setAttribute('src',img);
        fakeImage.addEventListener('load',() => {
          percentsTotal++;
          setPercent(images.length,percentsTotal);
        });
        fakeImage.addEventListener('error',() => {
          percentsTotal++;
          setPercent(images.length,percentsTotal);
        })
      })
    };
    loadImages(imgPath);
  };

  document.addEventListener('DOMContentLoaded',preloader);
})();