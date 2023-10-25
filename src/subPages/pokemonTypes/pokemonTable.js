import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';
import { Link } from 'react-router-dom';


//https://img.pokemondb.net/sprites/sword-shield/icon/venusaur.png
const PokemonTable = ({ pokeList }) => {
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <table class="table border border-collapse w-full font-normal text-base border-slate-500">
            <thead className=' bg-slate-300'>
                <tr>
                    <th>Pokemon</th>
                    <th>Sprite</th>
                    <th>Art Work</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokeList.map((e, i) =>
                        <tr className=' border-collapse border p-4 border-slate-500 odd:bg-white'
                            key={i} ><th
                                className='border-collapse border border-slate-500 p-4 capitalize'>
                                <Link to={`/t-pokedex/pokemon/${e.pokemon.name}`} onClick={event => { setPokeFlag(e.pokemon.name) }}>{e.pokemon.name}</Link>
                            </th>
                            <th
                                className='border-collapse border-slate-500 border p-4'>
                                <img className=' w-16 h-16'
                                    src={
                                        `https://img.pokemondb.net/sprites/sword-shield/icon/${e.pokemon.name}.png`} alt='pokeSprite' />
                            </th>
                            <th
                                className='border-collapse border-slate-500 border p-4'>
                                <img src={`https://img.pokemondb.net/artwork/large/${e.pokemon.name}.jpg`} alt='pokeArtWork' className=' h-16' />
                            </th>
                        </tr>)
                }
            </tbody>
        </table>
    )
}

export default PokemonTable