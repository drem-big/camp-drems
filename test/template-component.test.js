import makeHeaderTemplate from '../src/header-component.js';
const test = QUnit.test;

QUnit.module('make tempalte literate for header'); 

test('render header', assert => {
    //arrange
    const user = {
        displayName: 'Anna',
        photoURL: './assets/alien.png'
    };
    const expected = /*html*/`
    <div>
        <h1>I Drem Of Camping</h1>
        <nav>
            <a href="./favorites/favorites.html">Favorites</a>
            <a href="./search/search.html">Search</a>
        </nav>
        <section id="user-profile">
            <img src="./assets/alien.png">
            <span>Anna</span>
            <button id="sign-out">SIGN OUT</button>
        </section>
    </div>
    `;

    const results = makeHeaderTemplate(user);
    
    //act
    //assert
    assert.htmlEqual(results, expected);
});