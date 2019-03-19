import { auth } from './firebase.js';

export default function makeHeaderTemplate(user) {
    const html = /*html*/`
    <div>
        <h1>I Drem Of Camping</h1>
        <nav>
            <a href="./favorites/favorites.html">Favorites</a>
            <a href="./search/search.html">Search</a>
        </nav>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

function makeProfile(user) {
    const avatar = user.photoURL || 'assets/alien.png';

    const html = /*html*/`
        <section id="user-profile">
            <img src="${avatar}">
            <span>${user.displayName}</span>
            <button id="sign-out">SIGN OUT</button>
        </section>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


const headerContainer = document.getElementById('header-container');
export function loadHeader(options) {

    const dom = makeHeaderTemplate();
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', ()=> {
                auth.signOut();
                window.location.hash = '';
            });
            headerContainer.appendChild(userDom);
        }
        else {
            window.location = './auth.html' + window.location.hash;
        }  
    });

}