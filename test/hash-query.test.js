const test = QUnit.test;

QUnit.module('hash query tests');

function writeSearchToQuery(existingQuery, query, state) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('query', query);
    searchParams.set('state', state);

    return searchParams.toString();
}

test('write search to query', assert => {
    //arrange
    const query = 'eastern oregon';
    const state = 'OR';
    
    const existingQuery = '';
    const expected = 'query=eastern+oregon&state=OR';

    //act
    const result = writeSearchToQuery(existingQuery, query, state);

    //assert

    assert.equal(result, expected);
});

function readSearchFromQuery(existingQuery) {
    const url = new URLSearchParams(existingQuery);
    const searchObject = {
        query: url.get('query'),
        state: url.get('state')
    };

    return searchObject;
}

test('read searech to query', assert => {
    //arrange
    const existingQuery = 'query=eastern+oregon&state=OR';
    const expected = {
        query: 'eastern oregon',
        state: 'OR'
    };
    //act
    const result = readSearchFromQuery(existingQuery);
    //assert
    assert.deepEqual(result, expected);
});

QUnit.module('write page to query');

function writePageToQuery(existingQuery, p) {
    const url = new URLSearchParams(existingQuery);
    url.set('p', p);
    return url.toString();
}

test('write page to query', assert => {
    //arrange
    const existingQuery = 'query=eastern+oregon&state=OR&p=1';
    const p = 2;
    //act
    const expected = 'query=eastern+oregon&state=OR&p=2';
    const query = writePageToQuery(existingQuery, p);
    //assert
    assert.equal(query, expected);
});