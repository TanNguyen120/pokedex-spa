import React from 'react'
import { BiLandscape } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const HabitatCanvas = ({ habitat }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono text-black m-1">
            <h3 className=' text-slate-500 font-semibold'>
                Habitat < BiLandscape className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid-cols-2 capitalize'>
                {
                    habitat ? <Link to={`/t-pokedex/poke-habitat/${habitat.name}`} className=' hover:text-blue-500 hover:underline'> {habitat.name} </Link> : "unknown"
                }
            </div>
        </div>
    )
}

export default HabitatCanvas