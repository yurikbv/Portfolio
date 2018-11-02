'use strict';

(function () {
  let parallaxContainer = document.getElementById('parallax'),
  layers = parallaxContainer.querySelectorAll('.parallax__layer');

  let moveLayer = function(e){
    let
      initialX = (parallaxContainer.clientWidth / 2) - e.pageX,
      initialY = (parallaxContainer.clientHeight / 2) - e.pageY;

    Array.from(layers).forEach((layer,i) => {
      let
        devider = i / 100,
        positionX = initialX * devider,
        positionY = initialY * devider;

      layer.style.bottom = '-' + parallaxContainer.clientHeight / 2 * devider + 'px';
      layer.style.transform = 'translate3d(' + positionX +'px, ' + positionY +'px, 0)';
    });
  };

  parallaxContainer.addEventListener('mousemove',moveLayer)
})();