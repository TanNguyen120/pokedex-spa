import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';

const PokeFrame = ({ pokename }) => {
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <div className=' grid grid-cols-1 w-fit my-6'>
            <div className='  rounded-full bg-white border-8 border-slate-400 hover:cursor-pointer w-40 h-40 p-6'>
                <Link className=' hover:cursor-pointer' to={`/t-pokedex/pokemon/${pokename}`} onClick={e => { setPokeFlag(pokename) }}>
                    <img alt={pokename} src={`https://img.pokemondb.net/sprites/home/normal/2x/avif/${pokename}.avif`} className=' object-scale-down ' />
                </Link>
            </div>
            <div className=' font-base text-center capitalize'>
                {pokename}
            </div>
        </div>
    )
}

const PokemonInArea = ({ encounter }) => {
    return (
        <div className=' grid grid-cols-1 p-3 bg-slate-300  rounded-lg'>
            <div className=' font-medium text-lg text-left text-slate-500'>
                Pokemon encounter:
            </div>
            <div>
                {
                    encounter.map((element, index) => <PokeFrame key={index} pokename={(element.pokemon.name)} />)
                }
            </div>
        </div>
    )
}

export default PokemonInArea