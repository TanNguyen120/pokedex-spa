import React from 'react'
import PokedexDescription from './pokedexDescription';


const PokedexEntry = ({ pokedexEntry }) => {

    // get all english description of pokedex entry
    const engEntry = [];
    pokedexEntry.forEach(element => {
        if (element.language.name === 'en') {
            engEntry.push(element);
        }
    });
    return (
        <div>
            <PokedexDescription pokeEntry={engEntry} />
        </div>
    )
}

export default PokedexEntry