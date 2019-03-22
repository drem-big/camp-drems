export function makeMapTemplate(data) {
    const html = /*html*/ `
    <img src="${data.url}" id="googlepic" alt="">
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadMap(data) {
    const main = document.getElementById('main');
    const dom = makeMapTemplate(data);
    main.appendChild(dom);
}