export function makeForecastCard(day) {
    const html = /*html*/ `
        <li class="forecast-item">
            <p>Date + Time: ${day.dt_txt}</p> 
            <p>Temp: ${day.main.temp}°</p>
            <p>Weather: ${day.weather[0].description}</p>
        </li>   
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadWeather(forecast) {
    const forecastDisplay = document.getElementById('forecast-list');
    forecast.list.map(day => {
        if(day.dt_txt.includes('12:00:00')){
            const dom = makeForecastCard(day);
            forecastDisplay.appendChild(dom);
        }
    });
}

