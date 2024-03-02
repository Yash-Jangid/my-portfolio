import React from 'react'
import PortfolioComponent from '../components/PortfolioComponent'
import SmTitle from '../components/SmTitle'

export default function Portfolio() {
  return (
    <div className='w-11/12 md:w-11/12 lg:w-4/5 mx-auto' >
      <div className='align-middle text-center pb-10'>
        <SmTitle title={'My Portfolio'} desTitle={'VISIT MY PORTFOLIO'} />
      </div>
      <PortfolioComponent />
    </div>
  )
}
