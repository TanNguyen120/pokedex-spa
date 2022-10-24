import React from 'react'
import { GiSaltShaker } from 'react-icons/gi'
import FlavorColumn from './flavorColumn'
const BerryFlavors = ({ flavors }) => {
    return (
        <div className='  p-2 m-2  bg-slate-300 rounded-lg grid grid-cols-1'>
            <div className=' bg-slate-400 border-b-4 border-slate-500 p-2 rounded-t-lg text-lg font-semibold'>
                Flavor <GiSaltShaker className=' inline' />
            </div>
            <div className=' grid md:grid-cols-5 grid-cols-3'>
                {
                    flavors.map(flavor => <FlavorColumn flavorDetails={flavor} />)
                }
            </div>
        </div>
    )
}

export default BerryFlavors