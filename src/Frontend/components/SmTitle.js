import React from 'react'

export default function SmTitle({ title, desTitle }) {
    return (
        <>
            <div>
                <div style={{ display: 'inline-flex' }}>
                    <img src={require('../Assets/orangeDot.png')} alt="line" className='w-5 h-5 mr-1' />
                    <h5 className='font-second'>{title}</h5>
                </div>
                <h1 className='uppercase text-5xl font-bold '>{desTitle}</h1>
            </div>
        </>
    )
}
