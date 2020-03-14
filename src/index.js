import showPhone from "./modules/showPhone";
import headerMenu from "./modules/headerMenu";
import slowAnchorLink from "./modules/slowAnchorLinks";
import Popup from "./modules/togglePopup";
import maskPhone from "./modules/maskPhone";
import sendForm from "./modules/sendForm";
import Tooltip from "./modules/tooltip";
import sliderCarousel from "./modules/sliderCarousel";

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
      responsive: [
        {
          breakpoint: 1024,
          slideToShow: 1
        }
        ]
    });
    formulaTooltipSlider.init();

    const problemsTooltipSlider = new sliderCarousel({
      main: '.problems-slider-wrap',
      wrap: '.problems-slider',
      prev: '#problems-arrow_left',
      next: '#problems-arrow_right',
      infinity: true,
      responsive: [{
        breakpoint: 1024,
        slideToShow: 1
      }]
    });
    problemsTooltipSlider.init();
  }

});