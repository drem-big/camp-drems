const test = QUnit.test;
import { makeFavoriteTemplate } from '../src/favorite-card-component.js';

QUnit.module('Favorites Card Component');

test('make template literal for favorite', assert => {
    //arrange
    const sampleObject = {
        AddressStateCode: 'OR',
        City: 'Glide',
        FacilityID: '251364',
        FacilityLatitude: 43.2927778,
        FacilityLongitude: -122.6869444,
        FacilityName: 'HORSESHOE BEND CAMPGROUND (OR)',
        RecAreaName: 'Umpqua National Forest',
        campsiteURL: 'https://cdn.recreation.gov/public/2018/09/13/15/55/251364_b9734e82-6bfa-40b1-a742-d50255b4500e_1440.jpg'
    };

    const expected = /*html*/ `
        <li>
            <span><img class="campsite-favorites" src="../assets/tentwhite.png"></span>
            <a href="./campsite-detail.html?facilityId=251364&amp;lat=43.2927778&amp;lon=-122.6869444" alt="campsite detail page">
                <h3>HORSESHOE BEND CAMPGROUND (OR)</h3>
                <img src="https://cdn.recreation.gov/public/2018/09/13/15/55/251364_b9734e82-6bfa-40b1-a742-d50255b4500e_1440.jpg" alt="campsite image" class="campsite-image">
                <p> Umpqua National Forest, OR</p>
            </a>
        </li>
        `;

    //act
    const result = makeFavoriteTemplate(sampleObject);
    //assert
    assert.htmlEqual(result, expected);
});