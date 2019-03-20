import objectToArray from '../src/object-to-array.js';
const test = QUnit.test;

QUnit.module('make favorites array');

test('object is returned as array', assert => {
    //arrange
    const sampleObject = {
        objectOne: {
            query : 'eastern oregon',
            state : 'OR',
            offset : 0
        },
        objectTwo: {
            query : 'oregon',
            state : 'OR',
            offset : 0
        },
        objectThree: {
            query : 'eastern',
            state : 'OR',
            offset : 0
        },
    };

    const expected = [
        sampleObject.objectOne, sampleObject.objectTwo, sampleObject.objectThree
    ];
    //act
    const result = objectToArray(sampleObject);

    //assert
    assert.deepEqual(result, expected);
});