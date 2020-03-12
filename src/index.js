import showPhone from "./modules/showPhone";
import headerMenu from "./modules/headerMenu";
import slowAnchorLink from "./modules/slowAnchorLinks";
import Popup from "./modules/togglePopup";
import maskPhone from "./modules/maskPhone";
import sendForm from "./modules/sendForm";
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
});