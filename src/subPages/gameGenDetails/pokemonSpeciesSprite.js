import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { findPokeByName } from "../../reduxSlicer/findPokeInfoFlag"

const PokemonSpeciesSprite = ({ pokemon }) => {

    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <Link to={`/t-pokedex/pokemon/${pokemon.name}`} className=' rounded-lg bg-slate-50 hover:scale-125 hover:bg-slate-300 hover:cursor-pointer grid grid-cols-1' onClick={e => { setPokeFlag(pokemon.name) }}>
            <img src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.name}.png`} alt={pokemon.name} className=' h-full w-full ' />
            <div className=' m-1 capitalize'>
                {pokemon.name}
            </div>
        </Link>
    )
}

export default PokemonSpeciesSprite