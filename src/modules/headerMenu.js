const headerMenu = () => {
  const menu = document.querySelector('.popup-dialog-menu'),
        menuBtn = document.querySelector('.header > .menu');
  let isOpen = false;
  const handlerMenu = () => {
    if(isOpen){
      menu.style.transform = '';
      isOpen = false;
    } else {
      menu.style.transform = 'translate3d(0px,0,0)';
      isOpen = true;
    }
  };

  document.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.header > .menu') || target.closest('.close-menu') || target.closest('.popup-menu-nav__item')){
      handlerMenu();
    } else if(!target.closest('.popup-dialog-menu') && isOpen){
      menu.style.transform = '';
      isOpen = false;
    } else if (target.closest('.link-list-menu')){
      menu.style.transform = '';
      isOpen = false;
    }
  });
};

export default headerMenu;