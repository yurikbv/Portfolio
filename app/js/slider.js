function Slider(selector,options) {
    // DOM Nodes
    var self = this;
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider_image-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider_pager-prev'),
        nextSliderNode = sliderNode.querySelector('.slider_pager-next'),
        paginationNode = sliderNode.querySelector('.slider_pagination');

    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'];
    this.prevSlide = function () {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    };
    this.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };
    this.__render = function () {
        var styleDirection = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';
        sliderImagesNode.style[styleDirection] = -(currentSlideIndex * slideSize) + 'px';

        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };

    paginationNode.onclick = function (e) {
        e.preventDefault();
        var link = e.target;
        if (link.tagName !== 'A') { return; }
        currentSlideIndex = +link.dataset['slider_item'];
        self.__render();
    };

    prevSliderNode.onclick = function (e) {
        e.preventDefault();
        self.prevSlide();
        self.__render();
    };
    nextSliderNode.onclick = function (e) {
        e.preventDefault();
        self.nextSlide();
        self.__render();
    };
    this.__init = function () {
        if (options.direction === 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }
        this.__render();
    };

    this.__init();
}

new Slider ('.slider', {
        direction: 'horizontal',
        currentSlide : 2,
        changeInterval: 500
    })