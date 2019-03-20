export default function makeWeatherUrl(lat, lon) {
    const path = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=02fd61fe81d6deddb87cd6c131a9148d&units=imperial`;
    const url = new URL(path);
    return url.toString();
}