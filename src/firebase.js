const config = {
    apiKey: 'AIzaSyDHdmXfCYaXJ7KXbE5uHaWEQdFdFRfYMhM',
    authDomain: 'campdrem.firebaseapp.com',
    databaseURL: 'https://campdrem.firebaseio.com',
    projectId: 'campdrem'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');