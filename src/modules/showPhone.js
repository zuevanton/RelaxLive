const showPhone = () => {
  const controlBtn = document.querySelector('.header-contacts__arrow'),
        phoneWrap = document.querySelector('.header-contacts__phone-number-accord'),
        phone = phoneWrap.querySelector('a');
  let isShow = false;

  controlBtn.addEventListener('click', () => {
    if(isShow){
      phoneWrap.style.top = '0px';
      phone.style.opacity = '0';
      controlBtn.style.transform = 'rotate(0deg)';
      isShow = false;
    } else {
      phoneWrap.style.top = '30px';
      phone.style.opacity = '1';
      isShow = true;
      controlBtn.style.transform = 'rotateX(180deg)';
    }
  });
};

export default showPhone;