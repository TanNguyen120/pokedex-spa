import React from 'react'
import { useSelector } from 'react-redux';

const PokeDrawPic = ({ pokeId, pokeName }) => {
    const numberOfMon = useSelector((state) => state.pokemonCount);

    const idToURL = (pokeId, pokeName) => {
        if (pokeId <= numberOfMon) {

            let officialIndex = String(pokeId).padStart(3, '0');
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${officialIndex}.png`;
        }
        return `https://img.pokemondb.net/artwork/large/${pokeName}.jpg`
    }
    return (
        <div className='bg-white rounded-lg text-center text-black m-2 py-16'>
            <img className="" src={idToURL(pokeId, pokeName)} alt="poke sprite" />
        </div>
    )
}

export default PokeDrawPic
