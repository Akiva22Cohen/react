import React, { useEffect, useState } from 'react'

function WeatherInfo({ info }) {
    const [info9, setInfo] = useState();

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
        info9 &&
        <div className='card text-center text-bg-info shadow mt-5' >
            <img
                className='card-img-overlay mx-auto'
                src={`http://openweathermap.org/img/wn/${info9.icon}.png`}
                alt="Weather Icon"
            />
            <div className='card-body mt-5'>
                <h2 className='card-title'>Weather of {info9.name}</h2>
                <h3 className='card-subtitle'>Condition: {info9.condition}</h3>
                <div className='card-text'>
                    <h3>Temprature: {info9.temp} C</h3>
                    <h3>Wind: {info9.wind} kmh</h3>
                </div>
            </div>
        </div >
    )
}

export default WeatherInfo