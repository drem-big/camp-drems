// import makeHeaderTemplate from './header-component.js';
import loadCard from './list-component.js';
import updateSearchTerm from '../search/search-component.js';
import { readSearchFromQuery, writeSearchToQuery, writePageToQuery } from '../src/hash-query.js';
import makeSearchComponent from '../src/make-search-url.js';

// let url = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities?limit=50&full=true&activity=CAMPING&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d&query=eastern+oregon&state=OR&offset=0';

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    console.log('hash');
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
            loadCard(results.RECDATA);
        });
}