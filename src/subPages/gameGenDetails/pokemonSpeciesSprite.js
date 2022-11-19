import React from 'react'
import { Link } from 'react-router-dom'

const PokemonSpeciesSprite = ({ pokemon }) => {
    return (
        <Link className=' rounded-lg bg-slate-50 hover:scale-125 hover:bg-slate-300 hover:cursor-pointer grid grid-cols-1'>
            <img src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.name}.png`} alt={pokemon.name} className=' h-full w-full ' />
            <div className=' m-1 capitalize'>
                {pokemon.name}
            </div>
        </Link>
    )
}

export default PokemonSpeciesSprite