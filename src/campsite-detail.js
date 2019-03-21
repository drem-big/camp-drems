import { loadHeader } from './header-component.js';
import makeDetailTemplate, { makeImageTemplate } from './detail-component.js';
import { makeFacilityUrl, makeMediaUrl } from '../src/make-detail-url.js';
import loadWeather from './weather/make-forecast-card.js';
import makeWeatherUrl from './weather/make-weather-url.js';

const searchParams = new URLSearchParams(window.location.search);
const facilityID = searchParams.get('facilityId');
const lat = searchParams.get('lat');
const lon = searchParams.get('lon');
const facilityUrl = makeFacilityUrl(facilityID);
const mediaUrl = makeMediaUrl(facilityID);
const weatherUrl = makeWeatherUrl(lat, lon);

const googleurl = 'https://maps.googleapis.com/maps/api/staticmap?center=Black%20Rock%20City&zoom=12&size=600x300&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318%20&markers=color:red%7Clabel:C%7C40.718217,-73.998284%20&key=AIzaSyC5yJb3hg67IT1ooaA091M9-YUUbF_-svw';
const mapURL = makeMap
//filter for the thing I want
const latLon = lat + ',' + lon;
console.log('latlon is ' + latLon);

export function makeMap(latLon) {
    const path = `https://maps.googleapis.com/maps/api/staticmap?center=${latLon}&zoom=12&size=600x300&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318%20&markers=color:red%7Clabel:C%7C40.718217,-73.998284%20&key=AIzaSyC5yJb3hg67IT1ooaA091M9-YUUbF_-svw`

    const url = new URL(path);
    return url.toString();
}

fetch(googleurl)
    // .then(res => res.json())
    .then(results => {
        console.log(results.url);
        console.log('here');
        var dom_img = document.getElementById('googlepic');
        dom_img.src = results.url;
    });

const user = {
    displayName: 'Anna',
    photoURL: './assets/alien.png'
};

loadHeader(user);

fetch(facilityUrl)
    .then(res => res.json())
    .then(results => {
        // console.log(results);
        loadDetail(results);
    });

fetch(mediaUrl)
    .then(res => res.json())
    .then(mediaResults => {
        // console.log(mediaResults);
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



