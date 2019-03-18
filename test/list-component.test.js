import data from '../data/single-campsite.js';

const test = QUnit.test;

QUnit.module('template literal for camp cards');

function makeCardTemplate(data) {

    const html = /*html*/ `
    <li>
        <a href="./campsite-detail.html" alt="campsite detail page">
            <h3>${data.RECDATA[0].FacilityName}</h3>
            <img src="${data.RECDATA[0].MEDIA[0].URL}" alt="title.name" class="campsite-image">
            <p>Location</p>
        </a>
    </li>
`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make card template', assert => {
    //arrange
    //act
    const expected = /*html*/`
    <li>
        <a href="./campsite-detail.html" alt="campsite detail page">
            <h3>MCNARY BEACH - SOCKEYE SHELTER (OR)</h3>
            <img src="https://cdn.recreation.gov/public/images/76416.jpg" alt="title.name" class="campsite-image">
            <p>Location</p>
        </a>
    </li>
    `;

    const result = makeCardTemplate(data);

    //assert
    assert.htmlEqual(result, expected);
});