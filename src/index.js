import showPhone from "./modules/showPhone";
import headerMenu from "./modules/headerMenu";
import slowAnchorLink from "./modules/slowAnchorLinks";
import Popup from "./modules/togglePopup";
import maskPhone from "./modules/maskPhone";
import sendForm from "./modules/sendForm";
import Tooltip from "./modules/tooltip";
import sliderCarousel from "./modules/sliderCarousel";
import repairTypesSliders from "./modules/repairTypesSliders";
import tabs from "./modules/tabs";
import tabSliders from "./modules/tabSliders";

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // отображение дополнительного телефона
  showPhone();

  // меню
  headerMenu();

  //плавный скролл
  slowAnchorLink();

  // попапы
  const repairPopup = new Popup({
    popup: '.popup-repair-types',
    popupBtn: '.link-list-repair, .link-list-menu',
    popupContent: '.popup-dialog-repair-types'
  });
  repairPopup.init();

  const privacyPoliticPopup = new Popup({
    popup: '.popup-privacy',
    popupBtn: '.link-privacy',
    popupContent: '.popup-dialog-privacy'
  });
  privacyPoliticPopup.init();

  const consult = new Popup({
    popup: '.popup-consultation',
    popupBtn: '.button_wide',
    popupContent: '.feedback-wrap'
  });
  consult.init();

  const transparencyPopup = new Popup({
    popup: '.popup-transparency',
    popupBtn: '.transparency-item__img',
    popupContent: '.popup-dialog-transparency'
  });
  transparencyPopup.init();
  //маска ввода
  const allPhoneInputs = document.querySelectorAll('input[name="phone"]');
  allPhoneInputs.forEach(item => {
    maskPhone(item);
  });

  // отправка форм
  sendForm();

  // подсказки
  const tooltipFormula = new Tooltip({
    wrap: '#formula',
    item: '.formula-item__icon',
    popup: '.formula-item-popup'
  });
  tooltipFormula.init();

  const tooltipProblems = new Tooltip({
    wrap: '#problems',
    item: '.problems-item__icon',
    popup: '.problems-item-popup'
  });
  tooltipProblems.init();

  // подключение слайдеров подсказок на разрешении < 1024
  if(document.documentElement.clientWidth < 1024){
    const formulaTooltipSlider = new sliderCarousel({
      main: '.formula-slider-wrap',
      wrap: '.formula-slider',
      prev: '#formula-arrow_left',
      next: '#formula-arrow_right',
      infinity: true,
      slideToShow: 1
    });
    formulaTooltipSlider.init();

    const problemsTooltipSlider = new sliderCarousel({
      main: '.problems-slider-wrap',
      wrap: '.problems-slider',
      prev: '#problems-arrow_left',
      next: '#problems-arrow_right',
      infinity: true,
      slideToShow: 1
    });
    problemsTooltipSlider.init();
  }

  // слайдер + табы виды ремонта
  tabs({
    tabHeaderItem: '.nav-list-repair',
    tabItem: '.repair-types-nav__item',
    tabContentItem: '.types-repair'
  });
  repairTypesSliders('.types-repair1');
  repairTypesSliders('.types-repair2');
  repairTypesSliders('.types-repair3');
  repairTypesSliders('.types-repair4');
  repairTypesSliders('.types-repair5');
  if(document.documentElement.clientWidth < 1024){
    const repairNavSlider = new tabSliders({
      main: '.repair-types-nav',
      wrap: '.nav-list-repair',
      prev: '#nav-arrow-repair-left_base',
      next: '#nav-arrow-repair-right_base'
    });
    repairNavSlider.init();
  }
  // слайдер договоров
  const transparencySlider = new sliderCarousel({
    main: '.popup-transparency-slider-wrap',
    wrap: '.popup-transparency-slider',
    prev: '#transparency_left',
    next: '#transparency_right',
    slideToShow: 1
  });
  transparencySlider.init();
  // пока не работает
  // слайдер отзывов
  const reviewsSlider = new sliderCarousel({
    main: '.reviews-slider-wrap',
    wrap: '.reviews-slider',
    prev: '#reviews-arrow_left',
    next: '#reviews-arrow_right',
    slideToShow: 1,
    infinity: true
  });
  reviewsSlider.init();

  const partnersSlider = new sliderCarousel({
    main: '.partners-slider_wrap',
    wrap: '.partners-slider',
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
    infinity: true,
    slideToShow: 3,
    responsive: [{
      breakpoint: 1024,
      slideToShow: 2
    },
     {
      breakpoint: 576,
      slideToShow: 1
    }]
  });
  partnersSlider.init();

  // scheme
  tabs({
    tabHeaderItem: '#scheme-list',
    tabItem: '.scheme-nav__item',
    tabContentItem: '.scheme-slider__slide',
    tabContentSecondItem: '.scheme-description-block'
  });
  if(document.documentElement.clientWidth < 1024){
    const schemeNavSlider = new tabSliders({
      main: '.scheme-types-nav',
      wrap: '#scheme-list',
      prev: '#nav-arrow-scheme_left',
      next: '#nav-arrow-scheme_right'
    });
    schemeNavSlider.init();
  }
});