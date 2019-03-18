const test = QUnit.test;
import { readSearchFromQuery, writePageToQuery, writeSearchToQuery } from '../src/hash-query.js';
QUnit.module('hash query tests');

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

test('read search from query', assert => {
    //arrange
    const existingQuery = 'query=eastern+oregon&state=OR&p=1';
    const expected = {
        query: 'eastern oregon',
        state: 'OR',
        p: 1
    };
    //act
    const result = readSearchFromQuery(existingQuery);
    //assert
    assert.deepEqual(result, expected);
});

test('if no page number, page number is 1', assert => {
    //arrange
    const existingQuery = 'query=eastern+oregon&state=OR&';
    const expected = {
        query: 'eastern oregon',
        state: 'OR',
        p: 1
    };
    //act
    const result = readSearchFromQuery(existingQuery);
    //assert
    assert.deepEqual(result, expected);
});

QUnit.module('write page to query');

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