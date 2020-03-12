import showPhone from "./modules/showPhone";
import headerMenu from "./modules/headerMenu";
import slowAnchorLink from "./modules/slowAnchorLinks";
import togglePopup from "./modules/togglePopup";
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // отображение дополнительного телефона
  showPhone();

  // меню
  headerMenu();

  //плавный скролл
  slowAnchorLink();

  // попап
  togglePopup();
});