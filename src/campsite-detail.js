import { loadHeader } from './header-component.js';
import makeDetailTemplate, { makeImageTemplate } from './detail-component.js';
import { makeFacilityUrl, makeMediaUrl } from '../src/make-detail-url.js';
import loadWeather from './weather/make-forecast-card.js';
import makeWeatherUrl from './weather/make-weather-url.js';
import makeMapurl from '../src/maps/make-map-url.js';
import loadMap from '../src/maps/make-map-img.js';

const searchParams = new URLSearchParams(window.location.search);
const facilityID = searchParams.get('facilityId');
const lat = searchParams.get('lat');
const lon = searchParams.get('lon');
const facilityUrl = makeFacilityUrl(facilityID);
const mediaUrl = makeMediaUrl(facilityID);
const weatherUrl = makeWeatherUrl(lat, lon);
const latLon = lat + ',' + lon;
const googleUrl = makeMapurl(latLon.toString());

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

fetch(googleUrl)
    .then(results => {
        console.log(results);
        loadMap(results);
    });

function loadDetail(data) {
    const main = document.getElementById('facility-info');
    const dom = makeDetailTemplate(data);
    main.appendChild(dom);
}

function loadImages(data) {
    const main = document.getElementById('main');
    const dom = makeImageTemplate(data);
    main.appendChild(dom);
}



