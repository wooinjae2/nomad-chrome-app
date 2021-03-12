const COORDS = 'coords';
const API_KEY = '9e145b1c01f2c0e01b37cfa13adf8082';

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

async function getWeather(lat, long){
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`).then((e)=>{
        console.log(e);
    })
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude
    };
    saveCoords(coordsObj);
    const weather = getWeather(latitude, longitude);
    console.log(weather);
}

function handleGeoError(){
   console.log('cant access geo location'); 
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = JSON.parse(localStorage.getItem(COORDS));
    if(loadedCoords === null){
      askForCoords();
    }else{
        const parseCoords = JSON.parse(localStorage.getItem(COORDS));
      console.log(parseCoords);
      console.log(getWeather(parseCoords.latitude, parseCoords.longitude));
      
    }
}

function init(){
    loadCoords();
}

init();