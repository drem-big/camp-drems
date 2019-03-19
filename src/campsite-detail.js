import { loadHeader } from './header-component.js';
import makeDetailTemplate, { makeImageTemplate } from './detail-component.js';
import data from '../data/single-campsite.js';

const user = {
    displayName: 'Anna',
    photoURL: './assets/alien.png'
};
loadHeader(user);


const facilityUrl = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities/251914/?apikey=cb99ea00-0bd2-4742-bd89-341cf682661d';
const mediaUrl = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities/251914/media?limit=50&offset=0&apikey=a21c6558-6a4d-4fc0-a5f0-5f66982ce7e2';
// if(!url) {
//     return;
// }
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
    console.log('load');
    const main = document.getElementById('main');
    const dom = makeDetailTemplate(data);
    main.appendChild(dom);
}
