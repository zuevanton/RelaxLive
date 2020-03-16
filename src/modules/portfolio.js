import sliderCarousel from "./sliderCarousel";

const portfolio = () => {

  const portfolioSlider = new sliderCarousel({
    main: '.portfolio-slider-wrap',
    wrap: '.portfolio-slider',
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right'
  });
  portfolioSlider.init();
};

export default portfolio;