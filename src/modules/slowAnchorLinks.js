const slowAnchorLink = () => {
  const links = document.querySelectorAll('.popup-menu-nav__item>a, .button-footer>a');

  links.forEach(item => {
    item.addEventListener('click', e =>{
      const id = e.target.hash !== undefined ? e.target.hash.slice(1) : e.target.parentNode.hash.slice(1),
        elem = document.getElementById(id);
      e.preventDefault();
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

export default slowAnchorLink;