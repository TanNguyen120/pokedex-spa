import React from 'react'
import { BsEgg } from 'react-icons/bs'

const EggGroup = ({ eggGroup }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3>
                EggGroup <BsEgg className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid grid-cols-2'>
                {eggGroup.map((element, index) => (
                    <div key={index}>{element.name}</div>
                ))}
            </div>
        </div>
    )
}

export default EggGroup