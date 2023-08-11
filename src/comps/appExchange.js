import React, { useRef, useState } from 'react'

function AppExchange() {

    let selectCoin = useRef();
    let inputAmount = useRef();
    let [coin, setCoin] = useState('');
    let [amount, setAmount] = useState('');

    return (
        <div className='container-fluid'>
            <div className='container'>
                <header style={{ height: '10vh' }}>header</header>
                <div className='bg-primary-subtle border col-md-6 mx-auto p-1 p-md-5 rounded shadow'>
                    <div className="p-3 m-1 bg-body rounded shadow">
                        <h2>Enter the coin you want:</h2>
                        <select onChange={() => setCoin(selectCoin.current.value)} ref={selectCoin} className='form-select'>
                            <option value=''>---</option>
                            <option value='3.3'>USD</option>
                            <option value='3.9'>EURO</option>
                            <option value='0.11'>BATH</option>
                        </select>
                    </div>
                    <div className="p-3 m-1 bg-body rounded shadow">
                        <h2>Enter the amount you want</h2>
                        <input onInput={() => setAmount(inputAmount.current.value)} ref={inputAmount} type='number' className='form-control' />
                        <h3 className='mt-4'>You will get {(coin * amount).toFixed(2)} NIS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppExchange;