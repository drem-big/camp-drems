
export function makeFacilityUrl(facilityID) {
    const path = `https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities/${facilityID}/?apikey=cb99ea00-0bd2-4742-bd89-341cf682661d`;
    const url = new URL(path);
    return url.toString();
}

export function makeMediaUrl(facilityID) {
    const path = `https://cors-anywhere.herokuapp.com/https://ridb.recreation.gov/api/v1/facilities/${facilityID}/media?apikey=cb99ea00-0bd2-4742-bd89-341cf682661d`;
    const url = new URL(path);
    return url.toString();
}