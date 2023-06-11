import _ from 'lodash';
import './style.css';

const API_KEY = process.env.API_KEY;

const fetchWeather = async (loc) => {
    let weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${loc}`);
    weatherData = await weatherData.json();

    const { location: {name}, current: {condition: {text}, temp_c, humidity }} = weatherData;

    weatherData = { name, temp_c, humidity, condition: text };

    console.log(weatherData);
}

fetchWeather("London");