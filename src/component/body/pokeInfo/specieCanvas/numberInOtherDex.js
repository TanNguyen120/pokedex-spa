import React from 'react';
import { GiPokerHand } from 'react-icons/gi'
import { Link } from 'react-router-dom';

const NumberInOtherDex = ({ pokedexNumber }) => {
    // the selector component
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 p-1">
            <h3>
                Number In Local Dex <GiPokerHand className='inline' />
            </h3>

            <div className='rounded-lg text-center text-black m-2  grid grid-cols-2 md:grid-cols-3 '>
                {pokedexNumber.map((element, index) => (
                    <Link to={`/t-pokedex/pokedexs/${element.pokedex.name}`} key={index} className='hover:cursor-pointer text-sm rounded-lg ring-1 ring-slate-400 m-1'> {element.pokedex.name}: {element.entry_number} </Link>
                ))}
            </div>

        </div>
    )
}

export default NumberInOtherDex