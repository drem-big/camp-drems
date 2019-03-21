export function makeTrailTemplate(trail) {
    const template = document.createElement('template');

    template.innerHTML = `
        <a href="${trail.url}" target="_blank">
            <div id="trail-container">
                <h3>${trail.name}</h3>
                <span>Rating: ${trail.stars} Stars</span>
                <img src="${trail.imgSmallMed}" alt="picture from trail">
                <h4>${trail.location}</h4>
                <span>Trail Condition: ${trail.conditionStatus}</span>
                <div id="distance-container">
                    <p id="distance-title-${trail.id}"></p>
                    <p id="distance-${trail.id}"></p>
                    <p id="duration-${trail.id}"></p> 
                </div>         
            </div>
        </a>
    `;

    return template.content;
}

import { makeDistanceUrl } from './make-trails-url.js';

const trailsList = document.getElementById('trails-list');
const searchParams = new URLSearchParams(window.location.search);
const lat = searchParams.get('lat');
const lon = searchParams.get('lon');

export default function loadTrails(trails) {
    trails.forEach(trail => {
        const dom = makeTrailTemplate(trail);
        trailsList.appendChild(dom);
        getDistance(trail);
    });
}

function getDistance(trail) {
    const distanceUrl = makeDistanceUrl(lat, lon, trail.latitude, trail.longitude);
    fetch(distanceUrl)
        .then(res => res.json())
        .then(results => {
            console.log(results);
            
            const distance = results.rows[0].elements[0].distance.text;
            const duration = results.rows[0].elements[0].duration.text;
            const distanceText = document.getElementById(`distance-${trail.id}`);
            const durationText = document.getElementById(`duration-${trail.id}`);
            const distanceTitle = document.getElementById(`distance-title-${trail.id}`);
            distanceText.textContent = distance;
            durationText.textContent = duration;
            distanceTitle.textContent = 'Distance from Campground:';
        });
}

