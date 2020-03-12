const togglePopup = () => {
  class Popup {
    constructor({popup, popupBtn, popupContent}) {
      this.test = popupContent;
      this.popup = document.querySelector(popup);
      this.popupBtn = document.querySelectorAll(popupBtn);
      this.popupContent = document.querySelector(popupContent);
    }

    openPopup(){
      this.popupBtn.forEach(item => {
        item.addEventListener('click', () => {
          this.popup.style.visibility = 'visible';
          console.log(this.popup);

        });
      });
    }

    closePopup(){
      document.addEventListener('click', (e) => {
        const target = e.target;
        if((!target.closest(this.test) && !target.closest('.link-list')) || target.closest('.close')){
          this.popup.style.visibility = '';

        }
      });
    }

    init(){
      this.openPopup();
      this.closePopup();
    }
  }

  const repairPopup = new Popup({
    popup: '.popup-repair-types',
    popupBtn: '.link-list-repair, .link-list-menu',
    popupContent: '.popup-dialog-repair-types'
  });
  repairPopup.init();
};
export default togglePopup;