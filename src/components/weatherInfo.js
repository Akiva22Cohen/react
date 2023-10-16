import React from 'react';
import { LiaWindSolid } from 'react-icons/lia';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import Map from './map';

function WeatherInfo({ info }) {
    const info9 = {
        coord: info.coord,
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
        coord,
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
        <div className='text-center mt-md-5 mt-sm-3 my-1' >
            <div className='d-flex flex-wrap justify-content-center align-items-center align-content-center'>
                <div className='rounded border shadow p-md-5 pt-md-0 p-2 me-1 w-100 bg-body-tertiary'>
                    <div>
                        <img
                            className=''
                            src={`http://openweathermap.org/img/w/${icon}.png`}
                            alt="Weather Icon"
                        />
                        <h2 className='display-5'>Weather of {name}</h2>
                        <h3 className=''>Condition: {condition}</h3>
                        <div className=''>
                            <h3><FaTemperatureHalf className='text-danger-emphasis' /> : {temp}<TbTemperatureCelsius /></h3>
                            <h3><LiaWindSolid className='text-secondary-emphasis' /> : {wind} kmh</h3>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center align-content-center'>
                        <div className='rounded border shadow col-sm-5 col-12 m-1'>
                            <div className='my-4'>
                                <p>Feels like: {feels_like}<TbTemperatureCelsius /></p>
                                <p><WiHumidity /> : {humidity}%</p>
                                <p>temp max: {temp_max}<TbTemperatureCelsius /></p>
                                <p>temp min: {temp_min}<TbTemperatureCelsius /></p>
                                <p>country: {country}</p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-12 m-1'>
                            <Map
                                coord={coord}
                                name={name}
                                country={country}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;