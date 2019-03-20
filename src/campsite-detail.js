import { loadHeader } from './header-component.js';
import makeDetailTemplate, { makeImageTemplate } from './detail-component.js';
import { makeFacilityUrl, makeMediaUrl } from '../src/make-detail-url.js';
import makeForecastCard from './weather/make-forecast-card.js';
// import data from '../data/sample-forecast-data.js';

const searchParams = new URLSearchParams(window.location.search);
const facilityID = searchParams.get('facilityId');
const lat = searchParams.get('lat');
const lon = searchParams.get('lon');
const facilityUrl = makeFacilityUrl(facilityID);
const mediaUrl = makeMediaUrl(facilityID);
const weatherUrl = makeWeatherUrl(lat, lon);


function makeWeatherUrl(lat, lon) {
    const path = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=02fd61fe81d6deddb87cd6c131a9148d&units=imperial`;
    const url = new URL(path);
    return url.toString();
}

const user = {
    displayName: 'Anna',
    photoURL: './assets/alien.png'
};

loadHeader(user);

fetch(facilityUrl)
    .then(res => res.json())
    .then(results => {
        console.log(results);
        loadDetail(results);
    });

fetch(mediaUrl)
    .then(res => res.json())
    .then(mediaResults => {
        console.log(mediaResults);
        loadImages(mediaResults);
    });

fetch(weatherUrl)
    .then(res => res.json())
    .then(results => {
        loadWeather(results);
    });


function loadDetail(data) {
    const main = document.getElementById('main');
    const dom = makeDetailTemplate(data);
    main.appendChild(dom);
}

function loadImages(data) {
    const main = document.getElementById('main');
    const dom = makeImageTemplate(data);
    main.appendChild(dom);
}

function loadWeather(forecast) {
    const forecastDisplay = document.getElementById('forecast-list');
    forecast.list.forEach(day => {
        const dom = makeForecastCard(day);
        forecastDisplay.appendChild(dom);
    });
}

