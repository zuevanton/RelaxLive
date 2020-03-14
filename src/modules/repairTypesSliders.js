const repairTypesSliders = (sliderItem) => {
  const slider = document.querySelector(sliderItem),
        sliderWrap = document.querySelector('.repair-types-slider-wrap'),
        slide = slider.querySelectorAll('.repair-types-slider__slide'),
        arrowLeft = '#repair-types-arrow_left',
        arrowRight = '#repair-types-arrow_right',
        sliderCounter = document.getElementById('repair-counter'),
        currentSlideValue = sliderCounter.querySelector('.slider-counter-content__current'),
        totalSlideValue = sliderCounter.querySelector('.slider-counter-content__total');
  let currentSlide = 0,
      totalSlide = 0;

  const prevSlide = (index) => {
    slide[index].classList.remove('repair-types-slider__slide_active');
  };

  const nextSlide = (index) => {
    slide[index].classList.add('repair-types-slider__slide_active');
  };

  const setCounter = () => {
    slide.forEach(() => {
      if(slider.style.display !== 'none'){
        currentSlideValue.textContent = currentSlide + 1;
        totalSlideValue.textContent = slide.length;
      }
    });
  };

  sliderWrap.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if(slider.style.display !== 'none'){
      prevSlide(currentSlide);
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
      setCounter();
    }
  });
  document.querySelector('.nav-list-repair').addEventListener('click', e => {
    const target = e.target;
    if(!target.closest('.repair-types-nav__item')) return;
    setCounter();
  });
};

export default repairTypesSliders;