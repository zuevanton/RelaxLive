import Popup from "./togglePopup";
const popup = new Popup({
  popup: '.popup-thank',
  popupContent: 'feedback-wrap'
});
const sendForm = () => {
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/application/json',
      },
      body: JSON.stringify(body),
    });
  };
  document.body.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.tagName.toLowerCase() !== 'form') return;
    if(!e.target.querySelector('.checkbox__input').checked){
      e.target.querySelector('.checkbox__label').style.borderColor = 'red';
      return
    }
    e.target.querySelector('.checkbox__label').style.borderColor = '';
    const formData = new FormData(e.target);
    let body = {};
    for(let value of formData.entries()){
      body[value[0]] = value[1];
    }
    postData(body)
      .then((response)=> {
        if(response.status !== 200){
          throw new Error('status not 200');
        }
        e.target.querySelectorAll('input').forEach(input => input.value = '');
        popup.openPopup();
        popup.init();
      })
      .catch(error => {
        console.error(error);
      })
  });
};

export default sendForm;