const test = QUnit.test;
import { makeTrailTemplate } from '../src/trails/trail-component.js';

QUnit.module('Nearby Trails');

test('template literal for trail cards', assert => {
    //arrange
    const trail = {
        'id': 7000130,
        'name': 'Bear Peak',
        'type': 'Featured Hike',
        'summary': 'A must-do hike for Boulder locals and visitors alike!',
        'difficulty': 'blueBlack',
        'stars': 4.5,
        'starVotes': 79,
        'location': 'Boulder, Colorado',
        'url': 'https://www.hikingproject.com/trail/7000130/bear-peak',
        'imgSqSmall': 'https://cdn-files.apstatic.com/hike/7005382_sqsmall_1435421346.jpg',
        'imgSmall': 'https://cdn-files.apstatic.com/hike/7005382_small_1435421346.jpg',
        'imgSmallMed': 'https://cdn-files.apstatic.com/hike/7005382_smallMed_1435421346.jpg',
        'imgMedium': 'https://cdn-files.apstatic.com/hike/7005382_medium_1435421346.jpg',
        'length': 5.7,
        'ascent': 2524,
        'descent': -2527,
        'high': 8370,
        'low': 6113,
        'longitude': -105.2755,
        'latitude': 39.9787,
        'conditionStatus': 'Minor Issues',
        'conditionDetails': 'Muddy, Snowy, Icy - start is muddy up to Mesa',
        'conditionDate': '2019-02-04 13:10:18'
    };

    const expected = `
        <a href="https://www.hikingproject.com/trail/7000130/bear-peak" target="_blank">
            <div id="trail-container">
                <h3>Bear Peak</h3>
                <span>Rating: 4.5 Stars</span>
                <img src="https://cdn-files.apstatic.com/hike/7005382_smallMed_1435421346.jpg" alt="picture from trail">
                <h4>Boulder, Colorado</h4>
                <span>Trail Condition: Minor Issues</span>
                <div id="distance-container"> 
                    <p id="distance-title-7000130"></p> 
                    <p id="distance-7000130"></p> 
                    <p id="duration-7000130"></p> 
                </div>        
            </div>
        </a>
    `;

    //act
    const result = makeTrailTemplate(trail);

    //assert
    assert.htmlEqual(result, expected);
});