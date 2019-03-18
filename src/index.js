// import makeHeaderTemplate from './header-component.js';
import loadCard from './list-component.js';
import { dataList } from '../data/sample-data.js';


const url = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&full=true&activity=CAMPING&lastupdated=10-01-2018&sort=%22Name%22&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d&query=eastern+oregon&state=OR#';

fetch(url)
    .then(res => res.json())
    .then(results => {
        loadCard(results.RECDATA);
    });