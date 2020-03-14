const repairTypesSliders = (sliderItem) => {
  const slider = document.querySelector(sliderItem),
        sliderWrap = document.querySelector('.repair-types-slider-wrap'),
        slide = slider.querySelectorAll('.repair-types-slider__slide'),
        arrowLeft = '#repair-types-arrow_left',
        arrowRight = '#repair-types-arrow_right';
  let currentSlide = 0;

  const prevSlide = (index) => {
    slide[index].classList.remove('repair-types-slider__slide_active');
  };

  const nextSlide = (index) => {
    slide[index].classList.add('repair-types-slider__slide_active');
  };

  sliderWrap.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if(slider.style.display !== 'none'){
      prevSlide(currentSlide);
      console.log(1);
      if(target.closest(arrowLeft)){
        currentSlide--;
      } else if(target.closest(arrowRight)){
        currentSlide++;
      }
      if (currentSlide >= slide.length){
        currentSlide = 0;
      }
      if(currentSlide < 0){
        currentSlide = slide.length - 1;
      }
      nextSlide(currentSlide);
    }
  });

};

export default repairTypesSliders;