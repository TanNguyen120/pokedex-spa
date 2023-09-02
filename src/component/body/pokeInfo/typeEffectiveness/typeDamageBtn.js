import React from 'react'
import typeToColor from '../../../../tool/typeColor';
import { Link } from 'react-router-dom';

const TypeDamageBtn = ({ typeObject }) => {
    let bg = "bg-white";
    bg = typeToColor(typeObject.type)
    return (
        <div className={` rounded-2xl ${bg} ring-1 ring-blue-500/100 m-1`}>
            <Link to={`/t-pokedex/type/${typeObject.type}`} className='mx-2 md:text-base font-semibold text-xs  text-white'>{typeObject.type}</Link>
            <span className=' rounded-full bg-white px-1 md:text-sm text-xs float-right m-1'> {typeObject.effect}x </span>
        </div>
    )
}

export default TypeDamageBtn