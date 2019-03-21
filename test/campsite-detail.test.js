import makeDetailTemplate from '../src/detail-component.js';
import data from '../data/single-campsite.js';

const test = QUnit.test;

QUnit.module('template literal for campsite detail page');

test('create html template for campsite detail', assert => {
    //arrange

    const expected = /*html*/`
    <article>
        <h1 id="facility-name">MCNARY BEACH - SOCKEYE SHELTER (OR)</h1>
        <p id="location">From Highway 730 turn north onto Beach Access Road, drive for about a mile and then turn right onto McNary Beach Road and that will take you right into McNary Beach Park.</p>
        <div><h2>Overview</h2>McNary Beach is located on Lake Wallula just upstream of McNary Lock and Dam in eastern Oregon on the Mid-Columbia River.<h2>Recreation</h2>The lake provides great boating opportunities with the Oregon Boat Ramp just downstream and a nice designated swimming area.  The trailhead for the Lewis and Clark trail is also located at the east end of the park.<h2>Facilities</h2>McNary Beach offers one day-use group picnic shelter with six tables and two fire grills.<h2>Natural Features</h2>The park is situated along the bank of the Columbia River.  Day users enjoy the relaxing shade of the mature trees throughout the park.<h2>Nearby Attractions</h2>McNary Dam is just downstream with the Pacific Salmon Visitor Center, Oregon Fish Viewing Room and the McNary Dam Wildlife Area with its beautiful natural trails.</div>
    </article>
    `;
    //act
    const result = makeDetailTemplate(data);

    //assert
    assert.htmlEqual(result, expected);
});