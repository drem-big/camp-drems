import data from '../data/sample-media-data.js'
const test = QUnit.test;

QUnit.module('image display template');

function makeImageTemplate(data) {
    const html = /*html*/ `
        <div id="image-container">
        ${data.RECDATA.map(image => {
            return /*html*/ `
                <img src="${image.URL}" alt="campsite photo">
            `
        }).join('')}
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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
    const result = makeImageTemplate(data)
    //assert
    assert.htmlEqual(result, expected);
})

