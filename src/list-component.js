export function makeCardTemplate(campsite) {
    const html = /*html*/ `
    <li>
        <a href="./campsite-detail.html" alt="campsite detail page">
            <h3>${campsite.FacilityName}</h3>
            <img src="${campsite.MEDIA[0].URL}" alt="title.name" class="campsite-image">
            <p>Location</p>
        </a>
    </li>
`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const resultsList = document.getElementById('results-list'); 

export default function loadCard(campsiteList) {
    campsiteList.forEach(campsite => {
        const dom = makeCardTemplate(campsite);
        resultsList.appendChild(dom);
    });
}