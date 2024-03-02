import React from 'react'
import SmTitle from '../components/SmTitle'
import TimeLine from '../components/TimeLine'

export default function Resume() {
    return (
        <div>
            <div className='py-10 w-11/12 md:w-11/12 lg:w-4/5 mx-auto'>
                <div className='align-middle text-center'>
                    <SmTitle title={'My Experiences'} desTitle={'2+ Years of Experience'} />
                </div>
                <TimeLine />
            </div>
        </div>
    )
}
