import React from 'react';
import { IoIosColorPalette } from 'react-icons/io';
import colorToBg from '../../../../tool/colorToBg';


const PokeColor = ({ pokeColor }) => {
    const bgColor = colorToBg(pokeColor.name);
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono text-black m-1 pb-2">
            <h3 className='  font-semibold text-slate-500'>
                Color <IoIosColorPalette className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 p-3'>
                <div className={`${bgColor} rounded-lg text-white font-semibold m-2 border  border-indigo-600`}>{pokeColor.name}</div>
            </div>
        </div>
    )
}

export default PokeColor