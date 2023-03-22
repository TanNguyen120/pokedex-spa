import React from 'react'
import { BsEgg } from 'react-icons/bs'

const EggGroup = ({ eggGroup }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
            <h3 className=' font-semibold text-slate-500'>
                EggGroup <BsEgg className='inline' />
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