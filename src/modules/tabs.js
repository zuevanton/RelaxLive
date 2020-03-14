const tabs = ({tabHeaderItem, tabItem, tabContentItem}) =>{
  const tabHeader = document.querySelector(tabHeaderItem),
    tab = tabHeader.querySelectorAll(tabItem),
    tabContent = document.querySelectorAll(tabContentItem);



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
      } else {
        tabContent[i].style.display = 'none';
        tab[i].classList.remove('active');
      }
    }
  };
};

export default tabs;