export default function makeDetailTemplate(data) {
    const html = /*html*/ `
    <article>
        <h1 id="facility-name">${data.FacilityName}</h1>
        <p id="location">${data.FacilityDirections}</p>
        <div>${data.FacilityDescription}</div>
            </article>
            `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeImageTemplate(data) {

    const html = /*html*/ `
        <div>
            ${data.RECDATA.map(image => {
                return /*html*/ `
                <img src="${image.URL}" alt="campsite photo">
                `;
            }).join('')}
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
