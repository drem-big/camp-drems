import { loadHeader } from './header-component.js';
import makeDetailTemplate from './detail-component.js';
import data from '../data/single-campsite.js';

const user = {
    displayName: 'Anna',
    photoURL: './assets/alien.png'
};
loadHeader(user);
loadDetail(data);

const url = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities/251914/?apikey=cb99ea00-0bd2-4742-bd89-341cf682661d';

// if(!url) {
//     return;
// }
fetch(url)
    .then(res => res.json())
    .then(results => {
        console.log(results);
        // loadDetail(results);
    });

function loadDetail(data) {
    const main = document.getElementById('main');
    const dom = makeDetailTemplate(data);
    
    main.appendChild(dom);
}
