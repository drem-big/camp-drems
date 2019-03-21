import data from '../../data/sample-forecast-data.js';

function findTime(forecast) {
    forecast.list.day.map(dt_txt => {
        let dates = dt_txt.join('');
        console.log(dates);
    });
}

findTime(data);