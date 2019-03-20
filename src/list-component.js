export function makeCardTemplate(campsite) {
    let campsiteURL = null;
    if(!campsite.MEDIA[0]) {
        campsiteURL = 'http://noodleblvd.com/wp-content/uploads/2016/10/No-Image-Available.jpg';
    } else {
        campsiteURL = campsite.MEDIA[0].URL;
    }
    const html = /*html*/ `
    <li>
        <a href="./campsite-detail.html?facilityId=${campsite.FacilityID}" alt="campsite detail page">
            <h3>${campsite.FacilityName}</h3>
            <img src="${campsiteURL}" alt="title.name" class="campsite-image">
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
    clearRows();
    campsiteList.forEach(campsite => {
        const dom = makeCardTemplate(campsite);
        resultsList.appendChild(dom);
    });
}

function clearRows() {
    while(resultsList.children.length > 0) {
        resultsList.lastElementChild.remove();
    }
}