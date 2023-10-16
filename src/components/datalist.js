import React from 'react';
import arr from '../countries.json';

function Datalist() {
    return (
        <>
            {arr.cities.sort().map(item => <option key={item}>{item}</option>)}
            {arr.countries.sort().map(item => <option key={item}>{item}</option>)}
        </>
    );
}

export default Datalist;