import { auth, favoritesByUserRef } from './firebase.js';

export function makeCardTemplate(campsite) {
    let campsiteURL = null;
    if(!campsite.MEDIA[0]) {
        campsiteURL = 'http://noodleblvd.com/wp-content/uploads/2016/10/No-Image-Available.jpg';
    } else {
        campsiteURL = campsite.MEDIA[0].URL;
    }

    let campsiteLocation = null;

    if(campsite.RECAREA[0] && campsite.RECAREA[0].RecAreaName) {
        campsiteLocation = campsite.RECAREA[0].RecAreaName + ' , ' + campsite.FACILITYADDRESS[0].AddressStateCode;
        console.log('has rec area');
    } else {
        console.log('does not have rec area');
        if(campsite.FACILITYADDRESS[0] && campsite.FACILITYADDRESS[0].City) {
            campsiteLocation = campsite.FACILITYADDRESS[0].City + ' , ' + campsite.FACILITYADDRESS[0].AddressStateCode;
        }
        else if(campsite.FacilityLatitude && campsite.FacilityLongitude) {
            campsiteLocation = campsite.FacilityLatitude + ' , ' + campsite.FacilityLongitude + ' , ' + campsite.FACILITYADDRESS[0].AddressStateCode;
        }
        else if(campsite.FACILITYADDRESS[0] && campsite.FACILITYADDRESS[0].AddressStateCode) {
            campsiteLocation = campsite.FACILITYADDRESS[0].AddressStateCode;
        }
        else {
            campsiteLocation = '';
        }
    }
    
    const html = /*html*/ `
    <li>
        <span><img class="campsite-favorites" src="../assets/tentwhite.png"></span>
        <a href="./campsite-detail.html?facilityId=${campsite.FacilityID}&lat=${campsite.FacilityLatitude}&lon=${campsite.FacilityLongitude}" alt="campsite detail page">
            <h3>${campsite.FacilityName}</h3>
            <img src="${campsiteURL}" alt="title.name" class="campsite-image">
            <p>${campsiteLocation}</p>
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

                let imageURL = null;
                if(campsite.MEDIA && campsite.MEDIA[0].URL) {
                    imageURL = campsite.MEDIA[0].URL;
                } else {
                    imageURL = 'http://noodleblvd.com/wp-content/uploads/2016/10/No-Image-Available.jpg';
                }

                let longitude = null;
                let latitude = null;
                if(campsite.FacilityLatitude && campsite.FacilityLongitude) {
                    longitude = campsite.FacilityLongitude;
                    latitude = campsite.FacilityLatitude;
                } else {
                    longitude = '';
                    latitude = '';
                }

                let state = null;
                if(campsite.FACILITYADDRESS && campsite.FACILITYADDRESS[0].AddressStateCode) {
                    state = campsite.FACILITYADDRESS[0].AddressStateCode;
                } else {
                    state = '';
                }
                
                let city = null;
                if(campsite.FACILITYADDRESS && campsite.FACILITYADDRESS[0].City) {
                    city = campsite.FACILITYADDRESS[0].City;
                } else {
                    city = '';
                }

                let recArea = null;
                if(campsite.RECAREA && campsite.RECAREA[0].RecAreaName) {
                    recArea = campsite.RECAREA[0].RecAreaName;
                } else {
                    recArea = '';
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
                            campsiteURL: imageURL,
                            FacilityLatitude: latitude,
                            FacilityLongitude: longitude,
                            AddressStateCode: state,
                            City: city,
                            RecAreaName: recArea
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
