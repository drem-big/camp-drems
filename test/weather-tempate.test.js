import { makeForecastCard } from '../src/weather/make-forecast-card.js';

const test = QUnit.test;

QUnit.module('weather display test');

test('template mirrors html for forecast data', assert => {
    //arrange
    const forecast = {
        "cod": "200",
        "message": 0.0039,
        "cnt": 40,
        "list": [
            {
                "dt": 1553115600,
                "main": {
                    "temp": 51.51,
                    "temp_min": 49.42,
                    "temp_max": 51.51,
                    "pressure": 1010.06,
                    "sea_level": 1010.06,
                    "grnd_level": 835.85,
                    "humidity": 53,
                    "temp_kf": 1.16
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 7.54,
                    "deg": 134.002
                },
                "rain": {
                    "3h": 0.01
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-20 21:00:00"
            }
        ]
    };

    const expected = /*html*/ `
        <li class="forecast-item">
            <p>Date + Time: 2019-03-20 21:00:00</p> 
            <p>Temp: 51.51° Weather: light rain</p>
        </li>
    `;
    //act
    const result = makeForecastCard(forecast.list[0]);
    //assert
    assert.htmlEqual(result, expected);
});