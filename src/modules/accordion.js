const accordion = () => {
  const accordionItem = document.querySelector('.accordion ul');
  accordionItem.addEventListener('click', e => {
    const target = e.target;
    if (!target.matches('.title_block')) return;
    const current = accordionItem.querySelector('.msg-active');
    if (!target.classList.contains('msg-active')) {
      target.classList.add('msg-active');
    }
    if (current) {
      current.classList.remove('msg-active');
    }
  });
};


export default accordion;