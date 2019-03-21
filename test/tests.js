import { app } from '../src/firebase.js';
import './html-equal.js';
// import './header-component.test.js';
// import './list-component.test.js';
import './hash-query.test.js';
import './make-search-component.test.js';
// import './campsite-detail.test.js';
import './image-template.test.js';
import './favorite-card-component.test.js';
import './make-favorites-array.test.js';
import './weather-tempate.test.js';
import './nearby-trails.test.js';
QUnit.done(() => {
    app.delete();
});