import React, { useRef } from 'react';

function WeatherForm({ appSetCity }) {
    const refInput = useRef();

    const cityInput = () => {
        appSetCity(refInput.current.value);
    }

    return (
        <nav className='p-md-3 p-sm-2 p-1'>
            <div className='container d-flex justify-content-between'>
                <div className='logo col-auto me-1'>
                    <h2>Weather</h2>
                </div>
                <div className='d-flex'>
                    <input
                        onKeyDown={e => (e.key === 'Enter') && cityInput()}
                        type='search'
                        placeholder='search for town weather...'
                        className='form-control rounded-end-0'
                        ref={refInput}
                    />
                    <button
                        onClick={cityInput}
                        className='btn btn-dark rounded-start-0'
                    >
                        search
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default WeatherForm