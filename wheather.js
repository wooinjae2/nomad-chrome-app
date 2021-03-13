const weather = document.querySelector('.js-weather');

const COORDS = 'coords';
const API_KEY = '9e145b1c01f2c0e01b37cfa13adf8082';



function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

async function getWeather(lat, long){
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`).then((response)=>{
        return response.json();
    }).then(json => {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerHTML = `${temperature} @ ${place}`
      console.log(json);
      return json;
    });
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