export function makeTrailsUrl(lat, lon) {
    const path = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=75&key=200431007-df4cdf0ad780091c4ea82a410f7badc2`;
    const url = new URL(path);
    return url.toString();
}

export function makeDistanceUrl(campLat, campLon, trailLat, trailLon) {
    const path = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${campLat},${campLon}&destinations=${trailLat},${trailLon}&key=AIzaSyCn4CbIaeP7Hp0FLzIhJLvKHfh_xJ4kDIM`;
    const url = new URL(path);
    return url.toString();
}