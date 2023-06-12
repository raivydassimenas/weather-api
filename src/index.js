import _ from 'lodash';
import './style.css';

const fetchWeather = async (loc) => {
    let weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=3f0918a66dae40e09f270450232304&q=${loc}`);
    weatherData = await weatherData.json();

    const { location: {name}, current: {condition: {text}, temp_c, humidity }} = weatherData;

    weatherData = { name, temp_c, humidity, text };

    return weatherData
}

const weatherForm = document.querySelector("#weather");
const weatherDataDiv = document.querySelector("#weather-data");
console.log(weatherDataDiv);

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = weatherForm.elements["location"];

    const weatherData = await fetchWeather(location.value);

    if (weatherData) {
        weatherDataDiv.innerHTML = '';
        weatherDataDiv.classList.add('weather-info-container');

        const locatiionH2 = document.createElement("h2");
        locatiionH2.innerHTML = "Location: " + weatherData.name;
        weatherDataDiv.appendChild(locatiionH2);

        const tempP = document.createElement("p");
        tempP.innerHTML = "Temperature (C): " + weatherData.temp_c;
        weatherDataDiv.appendChild(tempP);

        const humidityP = document.createElement("p");
        humidityP.innerHTML = "Humidity: " + weatherData.humidity;
        weatherDataDiv.appendChild(humidityP);

        const conditionP = document.createElement("p");
        conditionP.innerHTML = "Condition: " + weatherData.text;
        weatherDataDiv.appendChild(conditionP);
    } else {
        weatherDataDiv.innerHTML = '';
        weatherDataDiv.classList = [];
        alert("Invalid location");
    }

});