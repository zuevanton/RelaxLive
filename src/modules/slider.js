const slider = ({sliderItem, wrap, slideItem, prev, next, counter, navList, navItem}) => {
  const slider = document.querySelector(sliderItem),
        sliderWrap = document.querySelector(wrap),
        slide = slider.querySelectorAll(slideItem),
        arrowLeft = prev,
        arrowRight = next,
        sliderCounter = document.getElementById(counter),
        currentSlideValue = sliderCounter.querySelector('.slider-counter-content__current'),
        totalSlideValue = sliderCounter.querySelector('.slider-counter-content__total');
  let currentSlide = 0;

  const prevSlide = (index) => {
    slide[index].classList.remove('slider-slide_active');
  };

  const nextSlide = (index) => {
    slide[index].classList.add('slider-slide_active');
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
  document.querySelector(navList).addEventListener('click', e => {
    const target = e.target;
    if(!target.closest(navItem)) return;
    setCounter();
  });
  setCounter();
};

export default slider;