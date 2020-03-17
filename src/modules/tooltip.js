class Tooltip {
  constructor({wrap, item, popup, icon}) {
    this.wrap = wrap;
    this.item = item;
    this.popup = popup;
    this.isShow = '';
    this.icon = icon;
  }

  mouseout(){
    document.querySelector(this.wrap).addEventListener('mouseout', e => {
      const target = e.target;
      if(this.isShow && (target.closest(this.item))){
        this.isShow.querySelector(this.popup).style.visibility = '';
        this.isShow.querySelector(this.popup).style.opacity = '';
        this.isShow.classList.remove('active-item');
      }
    });
  }



  mouseover(){
    document.querySelector(this.wrap).addEventListener('mouseover', e => {
      if(document.documentElement.clientWidth > 1023) {
        const target = e.target;
        let targetPopup = target.querySelector(this.popup),
            targetIcon = target.closest(this.icon);
        if (!targetPopup) {
          targetPopup = target.parentNode.parentNode.querySelector(this.popup);
          if (!targetPopup) {
            targetPopup = target.parentNode.parentNode.parentNode.querySelector(this.popup);
          }
        }
        if (target.closest(this.item) && targetPopup) {
          let coords = target.closest(this.item).getBoundingClientRect(),
            top = coords.top - targetPopup.offsetHeight - 5;
          if (top < 0) {
            targetPopup.classList.add('formula-item-popup_down');
            targetPopup.style.bottom = `-${targetPopup.offsetHeight + 10}px`;
          } else {
            targetPopup.classList.remove('formula-item-popup_down');
            targetPopup.style.bottom = '';
          }
          targetIcon.classList.add('active-item');
          targetPopup.style.visibility = 'visible';
          targetPopup.style.opacity = '1';
          this.isShow = targetIcon;
        }
      }
    });
  }

  init(){
    this.mouseover();
    this.mouseout();
  }
}

export default Tooltip;