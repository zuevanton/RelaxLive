import tabs from "./tabs";

const repairTypesInfo = () => {
  const dateItem = document.querySelector('.popup-repair-types-content__head-date'),
        title = document.getElementById('switch-inner'),
        list = document.querySelector('.nav-list-popup-repair'),
        table = document.querySelector('.popup-repair-types-content-table');

  const createTabs = (data) => {
    data.map(item => item.title).forEach((tab, i) => {
      const tabItem = document.createElement('button');
      tabItem.classList.add('button_o');
      tabItem.classList.add('popup-repair-types-nav__item');
      if(i === 0){
        tabItem.classList.add('active');
      }
      tabItem.textContent = tab;
      list.insertAdjacentElement('beforeend', tabItem);
    });
  };

  const getPrices = (data) => {
    let prices = '';
    for(const type of data.priceList){
      prices += `<tr class="mobile-row showHide">
                <td class="repair-types-name">${type.typeService}</td>
                <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                <td class="repair-types-value">${type.units}</td>
                <td class="repair-types-value">${type.cost} руб.</td>
               </tr>`;
    }
    return prices;
  };

  const createPricesList = (data) => {
    for(const item of data){
      table.insertAdjacentHTML('beforeend',
        `<table class="popup-repair-types-content-table__list"><tbody>${getPrices(item)}</tbody></table>`);
    }
  };

  const createDate = (date) => dateItem.innerHTML = date + dateItem.innerHTML;

  const init = (data) => {
    createDate(data.shift().date);
    createTabs(data);
    createPricesList(data);
    tabs({
      tabHeaderItem: '.nav-list-popup-repair',
      tabItem: '.popup-repair-types-nav__item',
      tabContentItem: '.popup-repair-types-content-table__list'
    });
    document.querySelector('.nav-list-popup-repair').addEventListener('click', e => {
      const target = e.target;
      if(!target.closest('.popup-repair-types-nav__item')) return;
      title.textContent = target.textContent;
    });
  };

  const getData = () => {
    fetch('./db/db.json')
      .then(response => {
        if(response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      }, error => {
        console.error(error);
      })
      .then(init);
  };
  getData();
};

export default repairTypesInfo;