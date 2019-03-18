import data from '../data/single-campsite.js';

const test = QUnit.test;

QUnit.module('template literal for camp cards');

import { makeCardTemplate } from '../src/list-component.js';

test('make card template', assert => {
    //arrange
    const expected = /*html*/`
    <li>
        <a href="./campsite-detail.html" alt="campsite detail page">
            <h3>MCNARY BEACH - SOCKEYE SHELTER (OR)</h3>
            <img src="https://cdn.recreation.gov/public/images/76416.jpg" alt="title.name" class="campsite-image">
            <p>Location</p>
        </a>
    </li>
    `;
    //act

    const result = makeCardTemplate(data);

    //assert
    assert.htmlEqual(result, expected);
});