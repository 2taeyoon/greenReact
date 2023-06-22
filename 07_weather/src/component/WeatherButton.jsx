import React from 'react';
import Button from 'react-bootstrap/Button';

export default function WeatherButton({cities, setCity}) {
    return (
        <div className='weather_button'>
            <Button variant="primary" onClick={()=>setCity('current')}>Current Location</Button>
            { cities.map( (city, index) => ( <Button variant="outline-primary" key={index} onClick={()=>setCity(city)}>{city}</Button> ))}
        </div>
    )
}