import React from 'react';
import { IoIosColorPalette } from 'react-icons/io';
import colorToBg from '../../../../tool/colorToBg';


const PokeColor = ({ pokeColor }) => {
    const bgColor = colorToBg(pokeColor.name);
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3>
                Color <IoIosColorPalette className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 p-3'>
                <div className={`${bgColor} rounded-lg text-white font-semibold m-3`}>{pokeColor.name}</div>
            </div>
        </div>
    )
}

export default PokeColor