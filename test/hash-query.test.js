const test = QUnit.test;

QUnit.module('hash query tests');

function writeSearchToQuery(existingQuery, query, state) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('limit', 50);
    searchParams.set('offset', 0);
    searchParams.set('full', true);
    searchParams.set('activity', 'CAMPING');
    searchParams.set('apikey', 'cb99ea00-0bd2-4742-bd89-341cf682661d');
    searchParams.set('query', query);
    searchParams.set('state', state);

    return searchParams.toString();
}
test('write search to query', assert => {
    //arrange
    const query = 'eastern oregon';
    const state = 'OR';
    
    const existingQuery = '';
    const expected = 'limit=50&offset=0&full=true&activity=CAMPING&apikey=cb99ea00-0bd2-4742-bd89-341cf682661d&query=eastern+oregon&state=OR';

    //act
    const result = writeSearchToQuery(existingQuery, query, state);

    //assert

    assert.equal(result, expected);
});