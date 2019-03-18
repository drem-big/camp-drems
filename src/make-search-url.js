export default function makeSearchComponent(queryOptions) {
    const searchCampsitesURL = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities?limit=50&full=true&activity=CAMPING&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d';
    const url = new URL(searchCampsitesURL);
    url.searchParams.set('query', queryOptions.query);
    url.searchParams.set('state', queryOptions.state);
    url.searchParams.set('offset', parseInt(queryOptions.offset));

    return url.toString();
}