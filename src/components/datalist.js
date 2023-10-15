import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Datalist() {
    const [ar, setAr] = useState();
    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        const url = 'https://restcountries.com/v3.1/all?fields=name';
        const resp = await axios.get(url);
        const data = await resp.data;
        // console.log(data[0]['name']['common']);
        setAr(() => data.map(({ name }) => name['common']));
    };

    return (
        ar &&
        ar.map(item => <option key={item} className='me-1'>{item}</option>)
    );
}

export default Datalist;