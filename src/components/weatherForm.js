import React, { useRef, useState } from 'react'

function WeatherForm({ setCity }) {
    // const [city, setCity] = useState();
    const refInput = useRef();

    const cityInput = () => {
        setCity(refInput.current.value);
        console.log(setCity);
    }

    return (
        <nav className='text-bg-warning p-md-3 p-sm-2 p-1'>
            <div className='container d-flex justify-content-around'>
                <div className='logo col-auto'>
                    <h2>Weather</h2>
                </div>
                <div className='d-flex btn-group'>
                    <input
                        type='search'
                        placeholder='search for town weather...'
                        className='form-control rounded-end-0'
                        ref={refInput}
                    />
                    <button
                        onClick={cityInput}
                        className='btn btn-dark'
                    >
                        search
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default WeatherForm