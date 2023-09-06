import React, { useEffect, useState } from 'react'

function WeatherInfo({ info }) {
    const [info9, setInfo] = useState({
        name: info.name,
        condition: info.weather[0].description,
        temp: info.main.temp,
        wind: info.wind.speed,
        icon: info.weather[0].icon
    });

    useEffect(() => {
        setInfo({
            name: info.name,
            condition: info.weather[0].description,
            temp: info.main.temp,
            wind: info.wind.speed,
            icon: info.weather[0].icon
        })
    }, [info]);

    return (
        <div className='text-center mt-3 text-bg-info p-md-3 p-sm-2 p-1 rounded shadow'>
            <img src={`http://openweathermap.org/img/wn/${info9.icon}.png`} alt="Weather Icon" />
            <h2 className='display-5'>Weather of {info9.name}</h2>
            <h3>Condition: {info9.condition}</h3>
            <h3>Temprature: {info9.temp} C</h3>
            <h3>Wind: {info9.wind} kmh</h3>
        </div>
    )
}

export default WeatherInfo