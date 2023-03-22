import React from 'react'
import { TbPokeball } from 'react-icons/tb'

const AbilityCanvas = ({ abilities }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
            <h3 className=' text-slate-500 font-semibold'>
                Ability <TbPokeball className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid grid-cols-2'>
                {abilities.map((element, index) => (
                    <div className=' capitalize' key={index}>{element.ability.name}</div>
                ))}
            </div>
        </div>
    )
}

export default AbilityCanvas