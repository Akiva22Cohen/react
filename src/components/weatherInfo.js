import React, { useState } from 'react'

function WeatherInfo({ info }) {
    const [info9, setInfo] = useState({
        name: info.name,
        condition: info.weather[0].description,
        temp: info.main.temp,
        wind: info.wind.speed
    });

    return (
        <div className='text-center mt-3'>
            <h2 className='display-5'>Weather of {info9.name}</h2>
            <h3>Condition: {info9.condition}</h3>
            <h3>Temprature: {info9.temp} C</h3>
            <h3>Wind: {info9.wind} kmh</h3>
        </div>
    )
}

export default WeatherInfo