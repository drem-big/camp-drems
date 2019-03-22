export function makeFavoriteTemplate(campsite) {
    let campsiteLocation = null;
    if(campsite.RecAreaName) {
        campsiteLocation = campsite.RecAreaName + ', ' + campsite.AddressStateCode;
    }
    else if(campsite.City) {
        campsiteLocation = campsite.City + ', ' + campsite.AddressStateCode;
    }
    else {
        campsiteLocation = campsite.AddressStateCode;
    }
    
    const html = /*html*/ `
        <li>
            <span><img class="campsite-favorites" src="../assets/tentwhite.png"></span>
            <a href="./campsite-detail.html?facilityId=${campsite.FacilityID}&lat=${campsite.FacilityLatitude}&lon=${campsite.FacilityLongitude}" alt="campsite detail page">
                <h3>${campsite.FacilityName}</h3>
                <img src="${campsite.campsiteURL}" alt="campsite image" class="campsite-image">
                <p> ${campsiteLocation}</p>
            </a>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}