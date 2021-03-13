
const body = document.querySelector('body');

function getRandom(){
    const number = 2;
    return Math.floor(Math.random() * number);
}

function paintImage(number){
    const image = new Image();
    image.src = `./images/image${number}.jpg`;
    body.appendChild(image);
    image.classList.add('bgImage');
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();
