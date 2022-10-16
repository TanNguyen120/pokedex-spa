import React from 'react'
import { useSelector } from 'react-redux';
import refactorName from '../../../../tool/handlePokemonVariationName';

const PokeDrawPic = ({ pokeId, pokeName }) => {
    const numberOfMon = useSelector((state) => state.pokemonCount);

    const idToURL = (pokeId, pokeName) => {
        if (pokeId <= numberOfMon) {

            let officialIndex = String(pokeId).padStart(3, '0');
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${officialIndex}.png`;
        }

        let refactoredName = refactorName(pokeName)
        return `https://img.pokemondb.net/artwork/large/${refactoredName}.jpg`
    }
    return (
        <div className='bg-white rounded-lg text-center text-black m-2 p-2 grid grid-cols-1'>
            <img className="" src={idToURL(pokeId, pokeName)} alt="poke draw" />
            <div className=' text-lg font-semibold'> Official Artwork</div>
        </div>
    )
}

export default PokeDrawPic
