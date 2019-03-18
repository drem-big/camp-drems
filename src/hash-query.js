export function writeSearchToQuery(existingQuery, query, state) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('query', query);
    searchParams.set('state', state);

    return searchParams.toString();
}

export function readSearchFromQuery(existingQuery) {
    const url = new URLSearchParams(existingQuery);
    const pageNumber = parseInt(url.get('p') || 1);
    const searchObject = {
        query: url.get('query'),
        state: url.get('state'),
        p: pageNumber 
    };

    return searchObject;
}

export function writePageToQuery(existingQuery, p) {
    const url = new URLSearchParams(existingQuery);
    url.set('p', p);
    return url.toString();
}

