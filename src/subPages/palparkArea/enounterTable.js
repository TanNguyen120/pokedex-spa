import React from 'react'
import { Link } from 'react-router-dom'

const EnounterTable = ({ encounterTable }) => {
    const rowClass = 'border border-slate-300 pl-4 py-3'
    return (
        <table class="table-fixed  border-collapse text-left mt-4 capitalize ">
            <thead>
                <tr>
                    <th className={rowClass}>Specie</th>
                    <th className={rowClass}>Rate</th>
                    <th className={rowClass}>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    encounterTable.map((element, index) => <tr key={index} className=' even:bg-slate-200 hover:cursor-pointer hover:scale-105'>
                        <td className={rowClass}><Link className=' hover:underline hover:text-blue-400' to={`/t-pokedex/pokemon/${element.pokemon_species.name}`}>{element.pokemon_species.name}</Link> </td>
                        <td className={rowClass}>{element.rate}</td>
                        <td className={rowClass}>{element.base_score}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default EnounterTable