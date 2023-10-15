import React from 'react';
import { LiaWindSolid } from 'react-icons/lia';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';

function WeatherInfo({ info }) {
    const info9 = {
        feels_like: info.main.feels_like,
        humidity: info.main.humidity,
        temp: info.main.temp,
        temp_max: info.main.temp_max,
        temp_min: info.main.temp_min,
        name: info.name,
        country: info.sys.country,
        condition: info.weather[0].description,
        icon: info.weather[0].icon,
        wind: info.wind.speed,
    };

    const {
        feels_like,
        humidity,
        temp,
        temp_max,
        temp_min,
        name,
        country,
        condition,
        icon,
        wind
    } = info9;

    return (
        info9 &&
        <div className='text-center' >
            <img
                className=''
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt="Weather Icon"
            />
            <div className='d-sm-flex'>
                <div className='card card-body shadow me-sm-1'>
                    <h2 className='card-title display-5'>Weather of {name}</h2>
                    <h3 className='card-subtitle'>Condition: {condition}</h3>
                    <div className='card-text'>
                        <h3><FaTemperatureHalf className='text-danger-emphasis' /> : {temp}<TbTemperatureCelsius /></h3>
                        <h3><LiaWindSolid className='text-secondary-emphasis' /> : {wind} kmh</h3>
                    </div>
                </div>
                <div className='card card-body shadow mt-1 mt-sm-0'>
                    <div className='card-text'>
                        <p>Feels like: {feels_like}<TbTemperatureCelsius /></p>
                        <p><WiHumidity /> : {humidity}%</p>
                        <p>temp max: {temp_max}<TbTemperatureCelsius /></p>
                        <p>temp min: {temp_min}<TbTemperatureCelsius /></p>
                        <p>country: {country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;