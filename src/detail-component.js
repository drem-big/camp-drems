export default function makeDetailTemplate(data) {
    console.log(data.RECDATA[0].FacilityID);
    const regex = /\n/gi;
    const recData = data.RECDATA[0].FacilityDescription;
    const newDescription = recData.replace(regex, '');
    const html = /*html*/ `
    <article>
        <h1 id="facility-name">${data.RECDATA[0].FacilityName}</h1>
        <h3 id="location">${data.RECDATA[0].FACILITYADDRESS[0].City}, ${data.RECDATA[0].FACILITYADDRESS[0].AddressStateCode} </h3>
        <div>
        ${data.RECDATA[0].MEDIA.map(image => {
            return /*html*/ `
            <img src="${image.URL}" alt="campsite photo">
            `;
        }).join('')}
        </div>

        <div>${newDescription}</div>
        <h2>Activities</h2>
        <ul id="activities-list">
            ${data.RECDATA[0].ACTIVITY.map(activity => {
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
