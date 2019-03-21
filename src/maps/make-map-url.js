export default function makeMapurl(latLon) {
    const path = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x300&maptype=hybrid%20&markers=color:blue%7C${latLon}6&key=AIzaSyC5yJb3hg67IT1ooaA091M9-YUUbF_-svw`;
    const url = new URL(path);
    return url.toString();
}
