const clockContainer = document.querySelector('.js-clock'),
 clockTitle = clockContainer.querySelector("h1");

 function getTime(){
    const date = new Date();
    clockTitle.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
 }
function init() {
    
    setInterval(getTime, 1000);
}
init();