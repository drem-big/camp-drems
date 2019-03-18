const test = QUnit.test;

QUnit.module('make search url');

function makeSearchComponent(queryOptions) {
    const searchCampsitesURL = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities?limit=50&full=true&activity=CAMPING&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d';
    const url = new URL(searchCampsitesURL);
    url.searchParams.set('query', queryOptions.query);
    url.searchParams.set('state', queryOptions.state);
    url.searchParams.set('offset', parseInt(queryOptions.offset));

    return url.toString();
}
test('make a search url', assert => {
//arrange
    const queryOptions = {
        query : 'eastern oregon',
        state : 'OR',
        offset : 0
    };

//act
    const expected = 'https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities?limit=50&full=true&activity=CAMPING&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d&query=eastern+oregon&state=OR&offset=0';

    const result = makeSearchComponent(queryOptions);

//assert
    assert.equal(result, expected);
});