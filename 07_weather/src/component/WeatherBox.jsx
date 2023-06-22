import React from 'react'

export default function WeatherBox({weather}) {
    //console.log('weatherBox 컴포넌트에서 weather은?',weather);
    const iconNow = weather?.weather[0].icon;
    return (
        <div className='weather_box'>
            <h3 className='h5 text-danger fw-bold'>{weather?.name}</h3>
            <h2 className='fw-bold'>{weather?.main.temp }°C / {weather?.main.humidity}%</h2>
            <div className='h2 text-uppercase text-primary fw-bold'>{ weather?.weather[0].description }</div>
            <div><img src={`https://openweathermap.org/img/wn/${iconNow}@2x.png`} /></div>
        </div>
    );
}