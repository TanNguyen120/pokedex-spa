import React from 'react'
import { BsEgg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const EggGroup = ({ eggGroup }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
            <h3 className=' font-semibold text-slate-500 hover:cursor-help hover:underline hover:text-blue-400'>
                <Link to={`/t-pokedex/egg-group/`} >
                    EggGroup <BsEgg className='inline' />
                </Link>
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid grid-cols-1 divide-y px-2'>
                {eggGroup.map((element, index) => (
                    <div key={index} className="font-medium">{element.name}</div>
                ))}
            </div>
        </div>
    )
}

export default EggGroup