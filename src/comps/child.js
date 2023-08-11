import React from 'react'

function Child(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div className='text-start shadow rounded border col-md-8 text-bg-primary p-1 p-md-3 rounded-end-0'>
                <h2>Child component:</h2>
                <p>{props.txt}</p>
            </div>
            <button onClick={() => props.functionTransfer()} className='btn btn-warning rounded-start-0'>X</button>
        </div>
    )
}

export default Child