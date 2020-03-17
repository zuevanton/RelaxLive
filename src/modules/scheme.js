import sliderCarousel from "./sliderCarousel";
import Popup from "./togglePopup";

const scheme = () => {
  const transparencyPopup = new Popup({
    popup: '.popup-transparency',
    popupBtn: '.transparency-item__img',
    popupContent: '.popup-dialog-transparency'
  });
  transparencyPopup.init();

  const transparencySlider = new sliderCarousel({
    main: '.popup-transparency-slider-wrap',
    wrap: '.popup-transparency-slider',
    prev: '#transparency_left',
    next: '#transparency_right',
    slideToShow: 1,
    countered: true,
    infinity: true
  });
  transparencySlider.init();
  transparencySlider.setCounter();

  if(document.documentElement.clientWidth < 1091) {
    const mobileTransparencySlider = new sliderCarousel({
      main: '.transparency-slider-wrap',
      wrap: '.transparency-slider',
      prev: '#transparency-arrow_left',
      next: '#transparency-arrow_right',
      slideToShow: 1,
      infinity: true
    });
    mobileTransparencySlider.init();
    const mobileTransparencySlider2 = new sliderCarousel({
      main: '.transparency-slider-wrap',
      wrap: '.transparency-slider',
      prev: '#transparency_left',
      next: '#transparency_right',
      slideToShow: 1,
      infinity: true
    });
    mobileTransparencySlider2.init();
  }
  const schemeImgs = document.querySelectorAll('.transparency-item__img');
  schemeImgs.forEach((item, i) => {
    item.addEventListener('click', e =>{
      transparencySlider.showSlide(i);
      transparencySlider.setCounter(i+1);
    });
  });
};

export default scheme;