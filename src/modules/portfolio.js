import sliderCarousel from "./sliderCarousel";
import Popup from "./togglePopup";

const portfolio = () => {
  let portfolioSlider;
  if(document.documentElement.clientWidth > 576) {
    portfolioSlider = new sliderCarousel({
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
    portfolioSlider = new sliderCarousel({
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

  const showText = (textNumber) => {
    texts.forEach((item, i) => {
      if(i === textNumber){
        item.style.display = 'block';
      } else {
        item.style.display = '';
      }
    });
  };

  const prev = document.getElementById('popup_portfolio_left'),
        next = document.getElementById('popup_portfolio_right'),
        texts = document.querySelectorAll('.popup-portfolio-text');
  const syncSliders = (i) => {
    if(document.documentElement.clientWidth < 577) {
      portfolioSlider.setCounter(i + 1);
      portfolioSlider.showSlide(i);
    }
  };
  next.addEventListener('click', () => {
    syncSliders(sliderPopup.slideNum);
    if(sliderPopup.slideNum >= 10){
      showText(0);
      return;
    }
    showText(sliderPopup.slideNum);
  });
  prev.addEventListener('click', () => {
    syncSliders(sliderPopup.slideNum - 2);
    if(sliderPopup.slideNum < 2){
      showText(0);
      return;
    }
    showText(sliderPopup.slideNum - 2);
  });

  const portfolioPopup = new Popup({
    popup: '.popup-portfolio',
    popupBtn: '.portfolio-slider__slide-frame',
    popupContent: '.popup-dialog-portfolio'
  });
  portfolioPopup.init();

  const sliderPopup = new sliderCarousel({
    main: '.popup-portfolio-slider-wrap',
    wrap: '.popup-portfolio-slider',
    prev: '#popup_portfolio_left',
    next: '#popup_portfolio_right',
    slideToShow: 1,
    infinity: true,
    countered: true
  });
  sliderPopup.init();
  sliderPopup.setCounter();

  const slidesFrames = document.querySelectorAll('.portfolio-slider__slide-frame');
  slidesFrames.forEach((item, i) => {
    item.addEventListener('click', () => {
      i = i >= 10 ? i - 10 : i;
      sliderPopup.setCounter(i+1);
      sliderPopup.showSlide(i);
      showText(i);
    });
  });
};

export default portfolio;