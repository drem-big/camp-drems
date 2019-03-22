import { writeSearchToQuery } from '../src/hash-query.js';

const form = document.getElementById('search-form');
const keywordInput = form.querySelector('input');
const stateInput = form.querySelector('select');

document.addEventListener('submit', event => {
    event.preventDefault();
    const query = keywordInput.value;
    const state = stateInput.value;

    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, query, state);
    window.location.hash = newQuery;
});

export default function updateSearchTerm(query) {
    keywordInput.value = query;
}