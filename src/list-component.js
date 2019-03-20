import { auth, favoritesByUserRef } from './firebase.js';

export function makeCardTemplate(campsite) {
    let campsiteURL = null;
    if(!campsite.MEDIA[0]) {
        campsiteURL = 'http://noodleblvd.com/wp-content/uploads/2016/10/No-Image-Available.jpg';
    } else {
        campsiteURL = campsite.MEDIA[0].URL;
    }

    let campsiteLocation = null;
    if(!campsite.FacilityLatitude || !campsite.FacilityLongitude) {
        campsiteLocation = '';
    } else {
        campsiteLocation = campsite.FacilityLatitude + ' , ' + campsite.FacilityLongitude;
    }
    
    const html = /*html*/ `
    <li>
        <span><img class="campsite-favorites" src="../assets/tentwhite.png"></span>
        <a href="./campsite-detail.html?facilityId=${campsite.FacilityID}&lat=${campsite.FacilityLatitude}&lon=${campsite.FacilityLongitude}" alt="campsite detail page">
            <h3>${campsite.FacilityName}</h3>
            <img src="${campsiteURL}" alt="title.name" class="campsite-image">
            <p>${campsiteLocation}, ${campsite.FACILITYADDRESS[0].AddressStateCode}</p>
        </a>
    </li>
`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const resultsList = document.getElementById('results-list'); 

export default function loadCard(campsiteList, makeCardTemplate) {
    clearRows();
    campsiteList.forEach(campsite => {
        const dom = makeCardTemplate(campsite);
        const campsiteFavorite = dom.querySelector('.campsite-favorites');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCampsiteRef = userFavoritesRef.child(campsite.FacilityID);
        userFavoriteCampsiteRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite(){
                    isFavorite = true;
                    campsiteFavorite.src = '../assets/tentcolor.png';
                    // campsiteFavorite.classList.add('favorite');
                }

                function removeFavorite() {
                    isFavorite = false;
                    campsiteFavorite.src = '../assets/tentwhite.png';
                }

                campsiteFavorite.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteCampsiteRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteCampsiteRef.set({
                            FacilityName: campsite.FacilityName,
                            FacilityID: campsite.FacilityID,
                            campsiteURL: campsite.MEDIA[0].URL || 'http://noodleblvd.com/wp-content/uploads/2016/10/No-Image-Available.jpg',
                            FacilityLatitude: campsite.FacilityLatitude,
                            FacilityLongitude: campsite.FacilityLongitude,
                            AddressStateCode: campsite.FACILITYADDRESS[0].AddressStateCode,
                            City: campsite.FACILITYADDRESS[0].City,
                            RecAreaName: campsite.RECAREA[0].RecAreaName
                        });
                        addFavorite();
                    }
                });
            });
        resultsList.appendChild(dom);
    });
}

function clearRows() {
    while(resultsList.children.length > 0) {
        resultsList.lastElementChild.remove();
    }
}
