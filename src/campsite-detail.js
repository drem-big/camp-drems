import { loadHeader } from './header-component.js';
import makeDetailTemplate, { makeImageTemplate } from './detail-component.js';
import { makeFacilityUrl, makeMediaUrl } from '../src/make-detail-url.js';

const searchParams = new URLSearchParams(window.location.search);
const facilityID = searchParams.get('facilityId');
const facilityUrl = makeFacilityUrl(facilityID);
const mediaUrl = makeMediaUrl(facilityID)

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

function loadDetail(data) {
    const main = document.getElementById('main');
    const dom = makeDetailTemplate(data);
    main.appendChild(dom);
}

fetch(mediaUrl)
    .then(res => res.json())
    .then(mediaResults => {
        console.log(mediaResults);
        loadImages(mediaResults);
    })

function loadImages(data) {
    const main = document.getElementById('main');
    const dom = makeImageTemplate(data);
    main.appendChild(dom);
}

