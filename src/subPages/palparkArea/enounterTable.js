import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';

const EnounterTable = ({ encounterTable }) => {
    const dispatch = useDispatch();

    const findPokemon = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    const rowClass = 'border border-slate-300 pl-4 py-3';
    const thClass = rowClass + ' hover:cursor-help';
    return (
        <table class="table-fixed  border-collapse text-left mt-4 capitalize ">
            <thead>
                <tr>
                    <th title='The Pokemon that appear in this pal park area' className={thClass}>Specie</th>
                    <th className={rowClass}>Sprite</th>
                    <th title='The base rate for encountering this Pokémon in this pal park area.' className={thClass}>Rate</th>
                    <th title='The base score given to the player when this Pokémon is caught during a pal park run.' className={thClass}>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    encounterTable.map((element, index) => <tr key={index} className=' even:bg-slate-200 hover:cursor-pointer hover:bg-slate-400'>
                        <td className={rowClass}>
                            <Link
                                preventScrollReset={false}
                                onClick={e => { findPokemon(element.pokemon_species.name) }}
                                className=' hover:underline hover:text-blue-400' to={`/t-pokedex/pokemon/${element.pokemon_species.name}`}
                            >
                                {element.pokemon_species.name}
                            </Link>
                        </td>
                        <Link
                            preventScrollReset={false}
                            onClick={e => { findPokemon(element.pokemon_species.name) }}
                            className=' hover:underline hover:text-blue-400' to={`/t-pokedex/pokemon/${element.pokemon_species.name}`}
                        >
                            <td>
                                <img
                                    src={`https://img.pokemondb.net/sprites/home/normal/2x/avif/${element.pokemon_species.name}.avif`}
                                    alt={element.pokemon_species.name}
                                    className='object-scale-down h-12 w-12 ml-4'
                                />
                            </td>
                        </Link>
                        <td className={rowClass}>{element.rate}</td>
                        <td className={rowClass}>{element.base_score}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default EnounterTable