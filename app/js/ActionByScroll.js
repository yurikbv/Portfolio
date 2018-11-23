(function () {
  if(document.querySelector('.skills')){
    let items = document.querySelectorAll('[data-animation]');

    let startAnimate = () => {
      Array.from(items).forEach((el) => {
        if((el.getBoundingClientRect().y - document.documentElement.offsetHeight + 30) < 0){
          let className = el.dataset.animation;
          el.classList.add(className);
        }
      });
    };

    let animateCSS = () => {
      document.addEventListener('scroll',startAnimate);
      document.addEventListener('wheel',startAnimate);
      document.addEventListener('touchmove',startAnimate);
    };
    animateCSS();
  }
})();