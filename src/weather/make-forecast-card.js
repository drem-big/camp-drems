export function makeForecastCard(day) {
    let weatherIcon = null;
    if(day.weather[0].description.includes('clear')) {
        weatherIcon = '../../assets/weather-icons/clear.png';
    }
    else if(day.weather[0].description.includes('snow')) {
        weatherIcon = '../../assets/weather-icons/snow.png';
    }
    else if(day.weather[0].description.includes('thunderstorm')) {
        weatherIcon = '../../assets/weather-icons/thunderstorm.png';
    }
    else if(day.weather[0].description.includes('rain')) {
        weatherIcon = '../../assets/weather-icons/rain.png';
    }
    else if(day.weather[0].description.includes('drizzle')) {
        weatherIcon = '../../assets/weather-icons/drizzle.png';
    }
    else if(day.weather[0].description.includes('clouds')) {
        weatherIcon = '../../assets/weather-icons/clouds.png';
    }
    else {
        weatherIcon = '../../assets/weather-icons/bad.png';
    }
    
    const dateTime = day.dt_txt;
    const oldDate = dateTime.replace('12:00:00', '');
    const date = new Date(oldDate).toDateString();
    const description = (day.weather[0].description);
    
    const html = /*html*/ `
        <li class="forecast-item">
            <img src=${weatherIcon} alt="weather-icon" class="weather-icon">
            <p>${date}</p> 
            <p>${day.main.temp}°F</p>
            <p>${description}</p>
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

