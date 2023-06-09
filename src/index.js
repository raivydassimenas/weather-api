import _ from 'lodash';
import './style.css';

const API_KEY = "";

const fetchWeather = async (location) => {
    const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);

    console.log(weatherData);
}

fetchWeather("London");