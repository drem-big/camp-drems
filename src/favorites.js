import { loadHeader } from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import objectToArray from './object-to-array.js';
import loadCard from '../src/list-component.js';
import { makeFavoriteTemplate } from '../src/favorite-card-component.js';
loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const campsiteFavorite = objectToArray(value);
        loadCard(campsiteFavorite, makeFavoriteTemplate);
    });
});