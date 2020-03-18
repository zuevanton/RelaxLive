import tabs from "./tabs";
import tabSliders from "./tabSliders";
import slider from "./slider";
import Popup from "./togglePopup";

const designs = () => {
  // табы
  tabs({
    tabHeaderItem: '.nav-list-designs',
    tabItem: '.designs-nav__item',
    tabContentItem: '.designs-slider__style',
    tabContentThirdItem: '.preview-block'
  });
  const tabsSlider = new tabSliders({
    main: '.nav-designs',
    wrap: '.nav-list-designs',
    prev: '#nav-arrow-designs_left',
    next: '#nav-arrow-designs_right'
  });
  tabsSlider.init();

  // tabs({
  //   tabHeaderItem: '#nav-designs-popup',
  //   tabItem: 'designs-nav__item',
  //
  // });


  const designPopup = new Popup({
    popup: '.popup-design',
    popupBtn: '.link-list-designs a',
    popupContent: '.popup-dialog-design'
  });
  designPopup.init();
  if(document.documentElement.clientWidth < 1025) {
    slider({
      sliderItem: '.designs-slider__style1',
      wrap: '.designs-slider-wrap',
      slideItem: '.designs-slider__style-slide',
      prev: '#design_left',
      next: '#design_right',
      counter: 'designs-counter',
      navList: '.nav-list-designs',
      navItem: '.designs-nav__item'
    });
    slider({
      sliderItem: '.designs-slider__style2',
      wrap: '.designs-slider-wrap',
      slideItem: '.designs-slider__style-slide',
      prev: '#design_left',
      next: '#design_right',
      counter: 'designs-counter',
      navList: '.nav-list-designs',
      navItem: '.designs-nav__item'
    });
    slider({
      sliderItem: '.designs-slider__style3',
      wrap: '.designs-slider-wrap',
      slideItem: '.designs-slider__style-slide',
      prev: '#design_left',
      next: '#design_right',
      counter: 'designs-counter',
      navList: '.nav-list-designs',
      navItem: '.designs-nav__item'
    });
    slider({
      sliderItem: '.designs-slider__style4',
      wrap: '.designs-slider-wrap',
      slideItem: '.designs-slider__style-slide',
      prev: '#design_left',
      next: '#design_right',
      counter: 'designs-counter',
      navList: '.nav-list-designs',
      navItem: '.designs-nav__item'
    });
    slider({
      sliderItem: '.designs-slider__style5',
      wrap: '.designs-slider-wrap',
      slideItem: '.designs-slider__style-slide',
      prev: '#design_left',
      next: '#design_right',
      counter: 'designs-counter',
      navList: '.nav-list-designs',
      navItem: '.designs-nav__item'
    });
  }
  else {
    let previewBlock = document.querySelectorAll('.preview-block');
    previewBlock.forEach(item => {
      item.addEventListener('click', e => {
        let target = e.target;
        if(!target.closest('.preview-block').classList.contains('visible')) return;
        const previewBlockCur = Array.from(document.querySelectorAll('.preview-block'))
          .filter((item, i) => item.classList.contains('visible'))[0];
        const slides = Array.from(document.querySelectorAll('.designs-slider__style'))
          .filter(item => item.style.display !== 'none')[0].children;
        console.log(slides);
        Array.from(previewBlockCur.children).forEach((item, i) => {
          if(item === target.closest('.preview-block__item')){
            item.querySelector('.preview-block__item-inner').classList.add('preview_active');
            slides[i].classList.add('slider-slide_active');
          } else {
            item.querySelector('.preview-block__item-inner').classList.remove('preview_active');
            slides[i].classList.remove('slider-slide_active');
          }
        });
      });
    });
  }

};

export default designs;