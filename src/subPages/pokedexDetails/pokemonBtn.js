import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';

const PokemonBtn = ({ pokemon }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <Link to={`/t-pokedex/pokemon/${pokemon.pokemon_species.name}`} className=' rounded-lg bg-slate-50 hover:scale-125 hover:bg-slate-300 hover:cursor-pointer grid grid-cols-1 p-3' onClick={e => { setPokeFlag(pokemon.name) }}>
            <img src={pictureMode === 'sprite' ? `https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.pokemon_species.name}.png` : `https://img.pokemondb.net/artwork/large/${pokemon.pokemon_species.name}.jpg`} alt={pokemon.pokemon_species.name} className='h-24 w-24 ' />
            <div className=' m-1 capitalize'>
                {pokemon.pokemon_species.name}
            </div>
            <div className=' m-1 capitalize' >
                {
                    'No.' + pokemon.entry_number
                }
            </div>
        </Link>
    )
}

export default PokemonBtn