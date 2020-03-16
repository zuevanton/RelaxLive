export default class tabSliders {
  constructor({main, wrap, prev, next}) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.items = Array.from(this.wrap.children);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.position = 0;
    this.sliderWidth = this.wrap.clientWidth;
    this.step = Math.floor(this.sliderWidth / this.items.length);
  }

  nextSlide(){
    if(this.position + this.step / 2 >= this.sliderWidth - this.main.clientWidth) return;
    this.position += this.step;
    this.wrap.style.transform = `translateX(-${this.position}px)`;
  }

  prevSlide(){
    if(this.position <= 0) return;
    this.position -= this.step;
    console.log(1);
    this.wrap.style.transform = `translateX(-${this.position}px)`;
  }

  init(){
    this.next.addEventListener('click', this.nextSlide.bind(this));
    this.prev.addEventListener('click', this.prevSlide.bind(this));
  }
}