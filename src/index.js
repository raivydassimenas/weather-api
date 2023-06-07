import _ from 'lodash';
import './style.css';

const API_KEY = "3f0918a66dae40e09f270450232304";

const fetchWeather = async (location) => {
    const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);

    console.log(weatherData);
}

fetchWeather("London");