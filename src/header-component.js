export default function makeHeaderTemplate(user) {
    const html = /*html*/`
    <div>
        <h1>I Drem Of Camping</h1>
        <nav>
            <a href="./favorites/favorites.html">Favorites</a>
            <a href="./search/search.html">Search</a>
        </nav>
        <section id="user-profile">
            <img src="${user.photoURL}">
            <span>${user.displayName}</span>
            <button id="sign-out">SIGN OUT</button>
        </section>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
