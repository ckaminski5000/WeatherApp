import css from './style.css'
import { toDate, fromUnixTime } from 'date-fns'
import { convertDay, toMonth } from './date'
import freezing from './images/freezing.png'
import clear from './images/clear.png'
import cloundysnow from './images/cloundysnow.png'
import partlycloudy from './images/partlycloudy.png'
import flurries from './images/flurries.png'



let longitude;
let latitude;

document.querySelector("input").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let city = document.querySelector("input").value;
    retrieveCoordinates(city);
  }
});

async function retrieveCoordinates(city) {
  let geoApiKey =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=a510ae9d79be3d3a8ea17325ebe47871";
  let response = await fetch(geoApiKey, { mode: "cors" });
  response = await response.json();
  console.log(response);
  longitude = response[0].lon;
  latitude = response[0].lat;
  city = response[0].name;
  let weather = await retrieveWeather();
  weather.city = city;
  weather.longitude = longitude;
  weather.latitude = latitude;
  displayToday(weather);
  displayForecast(weather);
}
retrieveCoordinates('Los Angeles')

async function retrieveWeather() {
  let weatherApiKey1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a510ae9d79be3d3a8ea17325ebe47871`;
  let weatherApiKey2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=a510ae9d79be3d3a8ea17325ebe47871`;
  let response = await fetch(weatherApiKey1, { mode: "cors" });
  response = await response.json();
  
  let weatherDetails = {
    date: response.dt,
    description: response.weather[0].description,
    temp: response.main.temp,
    tempHigh: response.main.temp_max,
    tempLow: response.main.temp_min,
  };
  assignImage(weatherDetails);
  let response2 = await fetch(weatherApiKey2, { mode: 'cors'});
  response2 = await response2.json();
  console.log(response);
  get5day(weatherDetails, response2);
  return weatherDetails;
}

function Temperature() {
  return {
    convertKtoF(temperature) {
      let newTemperature = (temperature - 273.15) * (9 / 5) + 32;
      return Math.round(newTemperature);
    },
    convertKtoC(temperature) {
      let newTemperature = temperature - 273.15;
      return Math.round(newTemperature);
    },
  };
}

//call Temp Function to convert the temperature to celsius or Fahrenheit
let tempFunction = Temperature();

//create a function that assigns an image based on description
function assignImage(object) {
    let img = document.createElement('img');
    let temp = tempFunction.convertKtoF(object.temp);
    
    if(object.description.includes('rain') || object.description.includes('showers')){
        img.src = flurries;
        object.image = img;
    }
    else if(object.description.includes('snow') || object.description.includes('hail')){
        img.src = cloundysnow;
        object.image = img;
    }
    else if(temp < 55){
        img.src = freezing;
        object.image = img;
    }
    else if(object.description.includes('cloud')){
        img.src = partlycloudy;
        object.image = img;
    }
    else{
        img.src = clear;
        object.image = img;
    }
    
}

//create a function that makes first letter of each word uppercase
function firstLetterUpperCase(string){
    let array = string.split('');
    array[0] = array[0].toUpperCase();
    for(let i = 0; i < array.length; i++){
        if(typeof array[i + 1] === 'undefined'){
            break;
        }
        else if(array[i] === ' '){
            array[i + 1] = array[i + 1].toUpperCase(); 
        }      
    }  
    let phrase = array.join('');
    return phrase;
}

//get 5 day forecast
function get5day(object, apiData){
    object.fiveDay = [];
    object.fiveDay.push({temp: apiData.daily[1].temp.day, lowtemp: apiData.daily[1].temp.min, date: apiData.daily[1].dt, description: apiData.daily[1].weather[0].description});
    object.fiveDay.push({temp: apiData.daily[2].temp.day, lowtemp: apiData.daily[2].temp.min, date: apiData.daily[2].dt, description: apiData.daily[2].weather[0].description});
    object.fiveDay.push({temp: apiData.daily[3].temp.day, lowtemp: apiData.daily[3].temp.min, date: apiData.daily[3].dt, description: apiData.daily[3].weather[0].description});
    object.fiveDay.push({temp: apiData.daily[4].temp.day, lowtemp: apiData.daily[4].temp.min, date: apiData.daily[4].dt, description: apiData.daily[4].weather[0].description});
    object.fiveDay.push({temp: apiData.daily[5].temp.day, lowtemp: apiData.daily[5].temp.min, date: apiData.daily[5].dt, description: apiData.daily[5].weather[0].description});

}



//display correct temperature and images in Today Box

function displayToday(object) {
  //convert all temps to Fahrenheit
  let temp = tempFunction.convertKtoF(object.temp);
  let highTemp = tempFunction.convertKtoF(object.tempHigh);
  let lowTemp = tempFunction.convertKtoF(object.tempLow);
 
  //change today's date
  let day = convertDay(object.date);
  let date = fromUnixTime(object.date);
  let month = toMonth(date.getMonth());
  let dayOfMonth = date.getDate();
  document.querySelector('div.today h4').innerHTML = `${day}, ${month} ${dayOfMonth}`;

  //change city title
  document.getElementById('city').innerHTML = object.city;

  //change main temp on app
  document.getElementById("todayTemp").innerHTML = temp + "\u00B0";

//change description
  let description = document.createElement('div');
  description.id = 'description';
  let updated = firstLetterUpperCase(object.description);
  description.innerHTML = updated;
  document.getElementById('todayTemp').appendChild(description);

  //change high and low temps
  let HighLow = document.createElement('div');
  HighLow.id = 'HighLow'
  HighLow.innerHTML = `L: ${lowTemp}\u00B0    H: ${highTemp}\u00B0`;
  document.getElementById('todayTemp').appendChild(HighLow)

  //display correct image
  document.getElementById('todayImg').innerHTML = '';
  document.getElementById('todayImg').appendChild(object.image);
 
}

function displayForecast(object){
    let day1temp = tempFunction.convertKtoF(object.fiveDay[0].temp);
    let day1low = tempFunction.convertKtoF(object.fiveDay[0].lowtemp);
    let day2temp = tempFunction.convertKtoF(object.fiveDay[1].temp);
    let day2low = tempFunction.convertKtoF(object.fiveDay[1].lowtemp);
    let day3temp = tempFunction.convertKtoF(object.fiveDay[2].temp);
    let day3low = tempFunction.convertKtoF(object.fiveDay[2].lowtemp);
    let day4temp = tempFunction.convertKtoF(object.fiveDay[3].temp);
    let day4low = tempFunction.convertKtoF(object.fiveDay[3].lowtemp);
    let day5temp = tempFunction.convertKtoF(object.fiveDay[4].temp);
    let day5low = tempFunction.convertKtoF(object.fiveDay[4].lowtemp);
    let days = [day1temp, day2temp, day3temp, day4temp, day5temp];

    //update day of week
    document.querySelector('#day1 span').innerHTML = convertDay(object.fiveDay[0].date);
    document.querySelector('#day2 span').innerHTML = convertDay(object.fiveDay[1].date);
    document.querySelector('#day3 span').innerHTML = convertDay(object.fiveDay[2].date);
    document.querySelector('#day4 span').innerHTML = convertDay(object.fiveDay[3].date);
    document.querySelector('#day5 span').innerHTML = convertDay(object.fiveDay[4].date);



    //update temps
    document.querySelector('#day1 h5').innerHTML = day1temp;
    document.querySelector('#day1 h6').innerHTML = day1low;
    document.querySelector('#day2 h5').innerHTML = day2temp;
    document.querySelector('#day2 h6').innerHTML = day2low;
    document.querySelector('#day3 h5').innerHTML = day3temp;
    document.querySelector('#day3 h6').innerHTML = day3low;
    document.querySelector('#day4 h5').innerHTML = day4temp;
    document.querySelector('#day4 h6').innerHTML = day4low;
    document.querySelector('#day5 h5').innerHTML = day5temp;
    document.querySelector('#day5 h6').innerHTML = day5low;

    //add icons to object
    for(let i = 0; i < 5; i++){
        assignImage(object.fiveDay[i])
    }
    
    //update icons
    document.querySelector('#day1 img').src = object.fiveDay[0].image.src;
    document.querySelector('#day2 img').src = object.fiveDay[1].image.src;
    document.querySelector('#day3 img').src = object.fiveDay[2].image.src;
    document.querySelector('#day4 img').src = object.fiveDay[3].image.src;
    document.querySelector('#day5 img').src = object.fiveDay[4].image.src;

}
