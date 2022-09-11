import React from 'react';
import PokedexEntry from './pokedexEntry';

const SpecieCanvas = ({ specieInfo }) => {
    return (
        <div className='bg-slate-400 rounded-lg p-4 mr-5 ml-2 grid grid-cols-1 md:grid-cols-2'>
            <div className="md:col-span-2">
                <PokedexEntry pokedexEntry={specieInfo.flavor_text_entries} />
            </div>
        </div>
    )
}

export default SpecieCanvas