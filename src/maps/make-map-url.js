export default function makeMapurl(latLon) {
    const path = `https://maps.googleapis.com/maps/api/staticmap?center=${latLon}&zoom=12&size=600x300&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318%20&markers=color:red%7Clabel:C%7C40.718217,-73.998284%20&key=AIzaSyC5yJb3hg67IT1ooaA091M9-YUUbF_-svw`
    const url = new URL(path);
    return url.toString();
}

