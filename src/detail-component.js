export default function makeDetailTemplate(data) {
    const regex = /\n/gi;
    const recData = data.FacilityDescription;
    const newDescription = recData.replace(regex, '');
    const html = /*html*/ `
    <article>
        <h1 id="facility-name">${data.FacilityName}</h1>
        <h3 id="location">${data.FACILITYADDRESS[0].City}, ${data.FACILITYADDRESS[0].AddressStateCode} </h3>
        <div>
        ${data.MEDIA.map(image => {
            return /*html*/ `
            <img src="${image.URL}" alt="campsite photo">
            `;
        }).join('')}
        </div>

        <div>${newDescription}</div>
        <h2>Activities</h2>
        <ul id="activities-list">
            ${data.ACTIVITY.map(activity => {
                return /*html*/`
                <li>${activity.FacilityActivityDescription}</li>
                `;
            }).join('')}
        </ul>
    </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
