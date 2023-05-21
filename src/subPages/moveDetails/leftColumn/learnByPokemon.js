import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { findPokeByName } from '../../../reduxSlicer/findPokeInfoFlag';

const LearnByPokemon = ({ learnBy }) => {
    const dispatch = useDispatch();

    const findPokemon = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <div className='rounded-lg m-2 p-2 bg-slate-200 grid grid-cols-1'>
            <div className=' text-slate-500 text-left'>
                Learn By Pokemons:
            </div>
            <div className=' rounded-lg  p-2 bg-slate-50 divide-y'>
                {
                    learnBy.map((element, index) =>
                        <div className=' grid grid-cols-2 text-left capitalize pl-4 m-2' key={index}>
                            <Link
                                preventScrollReset={false}
                                onClick={e => { findPokemon(element.name) }}
                                className=' hover:underline hover:text-blue-400' to={`/t-pokedex/pokemon/${element.name}`}
                            >
                                {element.name}
                            </Link>
                            <div>
                                <img
                                    src={`https://img.pokemondb.net/sprites/home/normal/2x/avif/${element.name}.avif`}
                                    alt={element.name}
                                    className='object-scale-down h-12 w-12 ml-4'
                                />
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default LearnByPokemon