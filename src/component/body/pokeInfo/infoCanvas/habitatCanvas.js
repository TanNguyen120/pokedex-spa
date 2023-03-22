import React from 'react'
import { BiLandscape } from 'react-icons/bi'

const HabitatCanvas = ({ habitat }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono text-black m-1">
            <h3 className=' text-slate-500 font-semibold'>
                Habitat < BiLandscape className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid-cols-2 capitalize'>
                {
                    habitat ? habitat.name : "unknown"
                }
            </div>
        </div>
    )
}

export default HabitatCanvas