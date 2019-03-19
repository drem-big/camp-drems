import data from '../data/single-campsite.js';

const test = QUnit.test;

QUnit.module('template literal for campsite detail page');

const facilityIdURL = 'https://ridb.recreation.gov/api/v1/facilities/251914/campsites?limit=50&offset=0';

function makeDetailTemplate(data) {
    console.log(data.RECDATA[0].FacilityID);
    const html = /*html*/ `
    <article>
        <h1 id="facility-name">${data.RECDATA[0].FacilityName}</h1>
        <h3 id="location">${data.RECDATA[0].FACILITYADDRESS[0].City}, ${data.RECDATA[0].FACILITYADDRESS[0].AddressStateCode} </h3>
        <div>
        ${data.RECDATA[0].MEDIA.map(image => {
            return /*html*/ `
            <img src="${image.URL}" alt="campsite photo">
            `;
        }).join('')}
        </div>
        <div><h2>Overview</h2>McNary Beach is located on Lake Wallula just upstream of McNary Lock and Dam in eastern Oregon on the Mid-Columbia River.<h2>Recreation</h2>The lake provides great boating opportunities with the Oregon Boat Ramp just downstream and a nice designated swimming area.  The trailhead for the Lewis and Clark trail is also located at the east end of the park.<h2>Facilities</h2>McNary Beach offers one day-use group picnic shelter with six tables and two fire grills.<h2>Natural Features</h2>The park is situated along the bank of the Columbia River.  Day users enjoy the relaxing shade of the mature trees throughout the park.<h2>Nearby Attractions</h2>McNary Dam is just downstream with the Pacific Salmon Visitor Center, Oregon Fish Viewing Room and the McNary Dam Wildlife Area with its beautiful natural trails.</div>
        <h2>Activities</h2>
        <ul id="activities-list">
            <li>Hiking</li>
            <li>Canoeing</li>
            <li>Day Use Area</li>
            <li>Fishing</li>
            <li>Horseback Riding</li>
            <li>Water Access</li>
            <li>Swimming</li>
        </ul>
    </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


test('create html template for campsite detail', assert => {
    //arrange

    const expected = /*html*/`
    <article>
        <h1 id="facility-name">MCNARY BEACH - SOCKEYE SHELTER (OR)</h1>
        <h3 id="location">Umatilla, OR </h3>
        <div>
        <img src="https://cdn.recreation.gov/public/images/76416.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76418.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76436.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76410.jpg" alt="campsite photo">
        <img src="https://cdn.recreation.gov/public/images/76446.jpg" alt="campsite photo">
        </div>
        <div><h2>Overview</h2>McNary Beach is located on Lake Wallula just upstream of McNary Lock and Dam in eastern Oregon on the Mid-Columbia River.<h2>Recreation</h2>The lake provides great boating opportunities with the Oregon Boat Ramp just downstream and a nice designated swimming area.  The trailhead for the Lewis and Clark trail is also located at the east end of the park.<h2>Facilities</h2>McNary Beach offers one day-use group picnic shelter with six tables and two fire grills.<h2>Natural Features</h2>The park is situated along the bank of the Columbia River.  Day users enjoy the relaxing shade of the mature trees throughout the park.<h2>Nearby Attractions</h2>McNary Dam is just downstream with the Pacific Salmon Visitor Center, Oregon Fish Viewing Room and the McNary Dam Wildlife Area with its beautiful natural trails.</div>
        <h2>Activities</h2>
        <ul id="activities-list">
            <li>Hiking</li>
            <li>Canoeing</li>
            <li>Day Use Area</li>
            <li>Fishing</li>
            <li>Horseback Riding</li>
            <li>Water Access</li>
            <li>Swimming</li>
        </ul>
    </article>
    `;
    //act
    const result = makeDetailTemplate(data);

    //assert
    assert.htmlEqual(result, expected);


});