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
        <div className=' grid grid-cols-1 w-fit mt-6 mb-3 ml-7'>
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
// ====================================================================================================================================================================================
const PokeEncounterVersion = ({ versionEncounter }) => {
    return (
        <div className=' grid grid-cols-1 mb-8 mt-2'>
            <div className=' text-left'>
                <span className=' text-slate-400'>Version: </span> {versionEncounter.version.name}
            </div>
            <div className=' text-left'>
                <span className=' text-slate-400'>Max Chance: </span> {versionEncounter.max_chance}
            </div>
            <div className=' w-max my-4'>
                <table class="table-auto bg-white divide-y border-collapse border border-slate-300">
                    <thead className=' bg-slate-100'>
                        <tr className=' font-normal text-slate-400'>
                            <th className=' lg:px-32'>Method</th>
                            <th className=' lg:px-32'>Chance</th>
                            <th className=' lg:px-32'>Min.Lv</th>
                            <th className=' lg:px-32'>Max.Lv</th>
                        </tr>
                    </thead>
                    <tbody className=' divide-y'>
                        {
                            versionEncounter.encounter_details.map(element => <tr className=' py-6'>
                                <td className=' lg:px-32 my-6'><Link to={`/t-pokedex/encounter/`} className=' hover:text-blue-300 hover:cursor-pointer hover:underline'>  {element.method.name}</Link></td>
                                <td className=' lg:px-32 my-6'>{element.chance} %</td>
                                <td className=' lg:px-32 my-6'>{element.min_level}</td>
                                <td className=' lg:px-32 my-6'>{element.max_level}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
// ====================================================================================================================================================================================

const PokeEncounterRow = ({ encounterDetails }) => {
    return (
        <div className=' flex flex-col'>
            <PokeFrame pokename={(encounterDetails.pokemon.name)} />
            <div className='m-3 rounded-lg divide-y p-9'>
                {
                    encounterDetails.version_details.map((element, index) => <PokeEncounterVersion key={index} versionEncounter={element} />)
                }
            </div>

        </div>
    )
}
// ====================================================================================================================================================================================

// Main Component
const PokemonInArea = ({ encounter }) => {
    return (
        <div className=' grid grid-cols-1 p-3 bg-slate-300  rounded-lg'>
            <div className=' font-medium text-lg text-left text-slate-500'>
                Pokemon encounter:
            </div>
            <div className=' p-2 divide-y divide-gray-600 bg-white rounded-lg m-4'>
                {
                    encounter.map((element, index) => <PokeEncounterRow key={index} encounterDetails={(element)} />)
                }
            </div>
        </div>
    )
}

export default PokemonInArea