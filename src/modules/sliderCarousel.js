class sliderCarousel {
  constructor({
                main,
                wrap,
                prev,
                next,
                slideToShow,
                infinity = false,
                countered = false,
                position = 0,
                responsive = [] }) {
    this.main = document.querySelector(main);
    this.class = main.slice(1);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slideToShow;
    this.responsive = responsive;
    this.countered = countered;
    this.counter = this.main.querySelector('.slider-counter');
    this.slideNum = 1;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow)
    };
  }

  init(){
    this.addGloClass();
    this.addStyle();

    if(this.prev && this.next){
      this.controlSlider();
    } else {
      this.controlSlider();
    }
    if(this.responsive){
      this.responseInit();
    }
  }

  addGloClass() {
    this.main.classList.add(`glo-slider_${this.class}`);
    this.wrap.classList.add(`glo-slider__wrap_${this.class}`);
    for(const item of this.slides){
      item.classList.add(`glo-slider__item_${this.class}`);
    }
  }

  addStyle() {
    let style = document.getElementById(`sliderCarousel-style_${this.class}`);
    if(!style){
      style = document.createElement('style');
      style.id = `sliderCarousel-style_${this.class}`;
    }
    style.textContent = `
      .glo-slider_${this.class} {
        overflow: hidden !important;
      }
      .glo-slider__wrap_${this.class} {
        display: flex;
        transition: transform 0.5s;
        will-change: transform !important;
      }
      .glo-slider__item_${this.class} {
        flex: 0 0 ${this.options.widthSlide}% !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider(){
    if(this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if(this.countered){
        this.slideNum--;
        this.setCounter();
      }
      if(this.options.position < 0){
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `
      translateX(-${this.options.position * this.options.widthSlide}%)
      `;
    }
  }
  
  setCounter(i){
    const curSlideNumberVal = this.counter.querySelector('.slider-counter-content__current'),
          totalSlidesVal = this.counter.querySelector('.slider-counter-content__total');
    if(this.options.infinity){
      if(this.slideNum <= 0){
        this.slideNum = this.wrap.children.length;
      }
      if(this.slideNum > this.wrap.children.length){
        this.slideNum = 1;
      }
    }
    if(i){
      this.slideNum = i;
    }
    curSlideNumberVal.textContent = this.slideNum;
    totalSlidesVal.textContent = this.wrap.children.length;

  }
  
  showSlide(position){
    this.options.position = position;
    this.wrap.style.transition = '0s';
    this.wrap.style.transform = `
      translateX(-${this.options.position * this.options.widthSlide}%)
      `;
    setTimeout(()=>{
      this.wrap.style.transition = '';
    }, 500);
  }
  nextSlider(){
    if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if(this.countered){
        this.slideNum++;
        this.setCounter();
      }
      if(this.options.position > this.slides.length - this.slidesToShow){
        this.options.position = 0;
      }
      this.wrap.style.transform = `
      translateX(-${this.options.position * this.options.widthSlide}%)
      `;
    }
  }

  responseInit(){
    const slidesToShowDefault = this.slidesToShow,
      allRespone = this.responsive.map(item => item.breakpoint),
      maxResponse = Math.max(...allRespone);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if(widthWindow < maxResponse){
        for (let i = 0; i < allRespone.length; i++){
          if(widthWindow < allRespone[i]){
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };
    checkResponse();

    window.addEventListener('resize', checkResponse);
  }
}


export default sliderCarousel;