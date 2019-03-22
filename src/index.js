import loadCard from './list-component.js';
import updateSearchTerm from '../search/search-component.js';
import { readSearchFromQuery } from '../src/hash-query.js';
import makeSearchComponent from '../src/make-search-url.js';
import { loadHeader } from './header-component.js';
import { makeCardTemplate } from './list-component.js';

window.addEventListener('hashchange', loadQuery);

loadHeader();
const loadurl = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities?limit=50&full=true&activity=CAMPING&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d&query=north+cascades&state=WA';

fetch(loadurl)
    .then(res => res.json())
    .then(results => {
        loadCard(results.RECDATA, makeCardTemplate);
    });

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readSearchFromQuery(query);
    updateSearchTerm(queryOptions.query);

    const url = makeSearchComponent(queryOptions);

    if(!url) {
        return;
    }
    fetch(url)
        .then(res => res.json())
        .then(results => {
            loadCard(results.RECDATA, makeCardTemplate);
        });
}



