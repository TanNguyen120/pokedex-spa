import React from 'react'
import PokemonSpeciesSprite from './pokemonSpeciesSprite'

const GameGenPokemons = ({ pokemonSpecies }) => {
    return (
        <div className=' rounded-lg md:col-span-3 col-span-2  border-2 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
            <div className=' text-left m-4 text-base font-semibold text-slate-400'>
                Species:
            </div>
            <div className=' bg-slate-200 rounded-lg m-3 p-2 grid md:grid-cols-12 grid-cols-4 gap-4'>
                {pokemonSpecies.map((pokemon) => <PokemonSpeciesSprite pokemon={pokemon} key={pokemon.name} />)}
            </div>
        </div>
    )
}

export default GameGenPokemons