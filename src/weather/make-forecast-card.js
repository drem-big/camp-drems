export default function makeForecastCard(forecast) {
    const html = /*html*/ `
        <li class="forecast-item">
            <p>Date + Time: ${forecast.list[0].dt_txt}</p> 
            <p>Weather: ${forecast.list[0].main.temp}°, ${forecast.list[0].weather[0].description}</p>
        </li>   
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}