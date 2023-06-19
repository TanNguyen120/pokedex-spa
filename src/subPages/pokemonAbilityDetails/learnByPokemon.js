import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';

const LearnByPokemon = ({ pokeList }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <div className=' rounded-lg bg-slate-200 p-4 m-3 grid grid-cols-1'>{
            <table class="table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr className=' bg-slate-100'>
                        <th >Pokemon</th>
                        <th>Sprite</th>
                        <th className=' cursor-help' title='Whether or not this a hidden ability for the referenced Pokémon.'>Is Hidden</th>
                        <th className=' cursor-help' title={`Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.`}>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokeList.map((e, i) => <tr key={i} className='border border-slate-400 odd:bg-white even:bg-slate-100 text-left'>
                            <td className={' capitalize p-3'}><Link onClick={event => setPokeFlag(e.pokemon.name)} to={`/t-pokedex/pokemon/${e.pokemon.name}`} className=' hover:cursor-pointer hover:underline hover:text-blue-500'>{e.pokemon.name}</Link></td>
                            <td className=' pl-5 p-3' >
                                <Link onClick={event => setPokeFlag(e.pokemon.name)} to={`/t-pokedex/pokemon/${e.pokemon.name}`} className=' text-center'>
                                    <img class=' w-12 h-12' src={pictureMode === 'sprite' ? `https://img.pokemondb.net/sprites/sword-shield/icon/${e.pokemon.name}.png` : `https://img.pokemondb.net/artwork/large/${e.pokemon.name}.jpg`} alt={e.pokemon.name} className='h-24 w-28 ' />
                                </Link>
                            </td>
                            <td>
                                {e.is_hidden ? 'yes' : 'no'}
                            </td>
                            <td>
                                {e.slot}
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        }</div>
    )
}

export default LearnByPokemon