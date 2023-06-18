import React from 'react'
import { Link } from 'react-router-dom'

const LearnByPokemon = ({ pokeList }) => {

    return (
        <div className=' rounded-lg bg-slate-200 p-4 m-3 grid grid-cols-1'>{
            <table class="table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr className=' bg-slate-100'>
                        <th >Pokemon</th>
                        <th>Sprite</th>
                        <th>Is Hidden</th>
                        <th>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokeList.map((e, i) => <tr key={i} className='border border-slate-400 odd:bg-white even:bg-slate-100 text-left'>
                            <td className={' capitalize p-3'}><Link to={`/t-pokedex/version-group/${e.version_group.name}`} className=' hover:cursor-pointer hover:underline hover:text-blue-500'>{e.version_group.name}</Link></td>
                            <td className=' pl-5 p-3'>{e.flavor_text}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        }</div>
    )
}

export default LearnByPokemon