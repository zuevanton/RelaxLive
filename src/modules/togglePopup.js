
  class Popup {
    constructor({popup, popupBtn, popupContent}) {
      this.popupContent = popupContent;
      this.popup = document.querySelector(popup);
      this.popupBtn = document.querySelectorAll(popupBtn);
      this.isOpen = false;
    }

    openPopup(){
      this.popup.style.visibility = 'visible';
      this.isOpen = true;
    }

    closePopup(){
      this.popup.style.visibility = '';
      this.isOpen = false;
    }

    init(){
      if(this.popupBtn){
        this.popupBtn.forEach(item => {
          item.addEventListener('click', () => {
            this.openPopup();
          });
        });
      }
      document.addEventListener('click', (e) => {
        const target = e.target;
        if(!target.closest('.popup')) return;
        if(target.closest('.close')){
          this.closePopup();
        } else if (!target.closest(this.popupContent) && this.isOpen){
          this.closePopup();
        }
      });
    }
  }

export default Popup;