import sliderCarousel from "./sliderCarousel";

const portfolio = () => {

  if(document.documentElement.clientWidth > 576) {
    const portfolioSlider = new sliderCarousel({
      main: '.portfolio-slider-wrap',
      wrap: '.portfolio-slider',
      prev: '#portfolio-arrow_left',
      next: '#portfolio-arrow_right',
      slideToShow: 3,
      countered: true,
      responsive: [{
        breakpoint: 1024,
        slideToShow: 2
      },
        {
          breakpoint: 901,
          slideToShow: 1
        }]
    });
    portfolioSlider.init();
    const arrowPrev = document.getElementById('portfolio-arrow_left'),
      arrowNext = document.getElementById('portfolio-arrow_right');
    arrowNext.addEventListener('click', () => {
      arrowPrev.style.display = 'flex';
      if(portfolioSlider.options.position >= portfolioSlider.slides.length - portfolioSlider.slidesToShow){
        arrowNext.style.display = 'none';
      }
    });
    arrowPrev.addEventListener('click', () => {
      arrowNext.style.display = 'flex';
      if(portfolioSlider.options.position <= 0){
        arrowPrev.style.display = 'none';
      }
    });
  }
  else {
    const portfolioSlider = new sliderCarousel({
      main: '.portfolio-slider-wrap',
      wrap: '.portfolio-slider-mobile',
      prev: '#portfolio-arrow-mobile_left',
      next: '#portfolio-arrow-mobile_right',
      slideToShow: 1,
      countered: true,
      infinity: true
    });
    portfolioSlider.init();
    portfolioSlider.setCounter();
  }
};

export default portfolio;