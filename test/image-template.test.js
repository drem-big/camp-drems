import data from '../data/sample-media-data.js';
import { makeImageTemplate } from '../src/detail-component.js';
const test = QUnit.test;

QUnit.module('image display template');

test('template displays images from media data', assert => {
    //arrange
    const expected = /*html*/ `
    <div id="image-container">
        <img src="https://cdn.recreation.gov/public/images/76416.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76436.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76418.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76410.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76446.jpg" alt="campsite photo">
    </div>
    `;

    //act
    const result = makeImageTemplate(data);
    //assert
    assert.htmlEqual(result, expected);
});

