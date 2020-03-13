class Tooltip {
  constructor({wrap, item, popup}) {
    this.wrap = wrap;
    this.item = item;
    this.popup = popup;
    this.isShow = '';
  }

  mouseout(){
    document.querySelector(this.wrap).addEventListener('mouseout', e => {
      const target = e.target;
      if(this.isShow && (target.closest(this.item))){
        this.isShow.style.visibility = '';
        this.isShow.style.opacity = ''
      }
    });
  }



  mouseover(){
    document.querySelector(this.wrap).addEventListener('mouseover', e => {
      const target = e.target;
      let targetPopup = target.querySelector(this.popup);
      if(!targetPopup){
        targetPopup = target.parentNode.parentNode.querySelector(this.popup);
      }
      if(target.closest(this.item) && targetPopup){
        let coords = target.getBoundingClientRect(),
            top = coords.top - targetPopup.offsetHeight - 5;
        if(top < 0){
          console.log(1);
          targetPopup.classList.add('formula-item-popup_down');
          targetPopup.style.bottom = `-${targetPopup.offsetHeight + 10}px`;
        } else {
          targetPopup.classList.remove('formula-item-popup_down');
          targetPopup.style.bottom = '';
        }
        targetPopup.style.visibility = 'visible';
        targetPopup.style.opacity = '1';
        this.isShow = targetPopup;
      }
    });
  }

  init(){
    this.mouseover();
    this.mouseout();
  }
}

export default Tooltip;