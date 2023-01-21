const hamb = document.querySelector('.Hamb');
const popup = document.querySelector('.popup');
const menu = document.querySelector("#menu").cloneNode(1);

const test = document.querySelector('.Hamb');

test.addEventListener('click', hambHandler);

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle('open');
    renderPopup()
    
}
