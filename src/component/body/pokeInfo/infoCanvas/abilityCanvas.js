import React from 'react'
import { TbPokeball } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const AbilityCanvas = ({ abilities }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
            <h3 className=' text-slate-500 font-semibold'>
                Ability <TbPokeball className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 grid grid-cols-2'>
                {abilities.map((element, index) => (
                    <Link to={`/t-pokedex/ability/${element.ability.name}`} className=' capitalize hover:cursor-pointer hover:underline hover:text-blue-500' key={index}>{element.ability.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default AbilityCanvas