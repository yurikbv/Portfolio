'use strict';

(function() {
  class Parallax {
    constructor(){
      this.bg = document.querySelector('.hero__bg');
      this.user = document.querySelector('.hero__user-block');
      this.sectionText = document.querySelector('.hero__title--image');
    }
    move(block, windowScroll, strafeAmount) {
      let strafe = windowScroll / -strafeAmount + '%';
      let transformString = 'translate3d(0,'+ strafe +', 0)';
      let style = block.style;
      style.transform = transformString;
    }
    init(wScroll) {
      this.move(this.bg, wScroll, 40);
      this.move(this.sectionText, wScroll, 50);
      this.move(this.user, wScroll, 60);
    }
  }
  let parallax = new Parallax();
  window.onscroll = function () {
    let vScroll = window.pageYOffset;
    parallax.init(vScroll);
  }

})();