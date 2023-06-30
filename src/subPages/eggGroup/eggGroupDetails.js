import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';

const EggGroupDetails = ({ detailsData }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <table class="table-fixed border-collapse border border-slate-400">
            <thead>
                <tr className=' bg-slate-100'>
                    <th >Pokemon</th>
                    <th>Sprite</th>
                </tr>
            </thead>
            <tbody>
                {
                    detailsData.pokemon_species.map((e, i) => <tr key={i} className='border border-slate-400 odd:bg-white even:bg-slate-100 text-left'>
                        <td className={' capitalize p-3'}><Link onClick={event => setPokeFlag(e.name)} to={`/t-pokedex/pokemon/${e.name}`} className=' hover:cursor-pointer hover:underline hover:text-blue-500'>{e.name}</Link></td>
                        <td className=' pl-5 p-3' >
                            <Link onClick={event => setPokeFlag(e.name)} to={`/t-pokedex/pokemon/${e.name}`} className=' text-center'>
                                <img class=' w-12 h-12' src={pictureMode === 'sprite' ? `https://img.pokemondb.net/sprites/sword-shield/icon/${e.name}.png` : `https://img.pokemondb.net/artwork/large/${e.name}.jpg`} alt={e.name} className='h-24 w-28 ' />
                            </Link>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    )
}

export default EggGroupDetails