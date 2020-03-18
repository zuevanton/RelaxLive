const tabs = ({tabHeaderItem, tabItem, tabContentItem, tabContentSecondItem = '', tabContentThirdItem = ''}) =>{
  const tabHeader = document.querySelector(tabHeaderItem),
    tab = tabHeader.querySelectorAll(tabItem),
    tabContent = document.querySelectorAll(tabContentItem);
  let tabSecondContent,
      tabThirdContent;
  if(tabContentSecondItem){
    tabSecondContent = document.querySelectorAll(tabContentSecondItem);
  }
  if(tabContentThirdItem){
    tabThirdContent = document.querySelectorAll(tabContentThirdItem);
  }


  tabHeader.addEventListener('click', (e) => {
    let target = e.target.closest(tabItem);
    if(target){
      tab.forEach((item, i) => {
        if(item === target){
          toggleTabContent(i);
        }
      });
    }
  });
  const toggleTabContent = (index) => {
    for(let i = 0; i < tabContent.length; i++){

      if(index === i){
        tab[i].classList.add('active');
        tabContent[i].style.display = '';
        if(tabSecondContent) {
          tabSecondContent[i].classList.add('visible-content-block');
        }
        if(tabThirdContent){
          tabThirdContent[i].classList.add('visible');
        }
      } else {
        tabContent[i].style.display = 'none';
        tab[i].classList.remove('active');
        if(tabSecondContent){
          tabSecondContent[i].classList.remove('visible-content-block');
        }
        if(tabThirdContent){
          tabThirdContent[i].classList.remove('visible');
        }
      }
    }
  };
};

export default tabs;