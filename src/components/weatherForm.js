import React, { useRef } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Datalist from './datalist';

function WeatherForm() {
    const nav = useNavigate();
    const refInput = useRef();

    const cityInput = () => {
        refInput.current.value &&
            nav('/?q=' + refInput.current.value);
        refInput.current.value = '';
    }

    return (
        <nav className='text-bg-warning p-md-3 p-sm-2 p-1'>
            <div className='container d-sm-flex justify-content-between'>
                <div className='logo col-auto'>
                    <h2 className='text-success'>
                        Weather
                        <img
                            src={`http://openweathermap.org/img/w/10d.png`}
                            alt="Weather Icon"
                        />
                    </h2>
                </div>
                <div className='d-flex justify-content-end'>
                    <input
                        list='datalist'
                        onKeyDown={e => e.key === 'Enter' && cityInput()}
                        type='search'
                        placeholder='search for town weather...'
                        className='form-control rounded-end-0 text-bg-dark border-dark w-auto'
                        ref={refInput}
                    />

                    <datalist id='datalist'>
                        <Datalist />
                    </datalist>

                    <button
                        onClick={cityInput}
                        className='btn btn-light rounded-start-0'
                    >
                        <FcSearch />
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default WeatherForm;