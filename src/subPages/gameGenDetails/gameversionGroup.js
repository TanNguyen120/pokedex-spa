import React from 'react'
import { Link } from 'react-router-dom'

const GameversioGroup = ({ gameVersion }) => {
    return (
        <div className=' rounded-lg border-2 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
            <div className=' text-left m-4 text-base font-semibold text-slate-400'>
                Games In This Generation:
            </div>
            <ul className=' bg-white rounded-lg m-3 p-2 text-left'>
                {
                    gameVersion.map(element => <li className=' capitalize m-3 ' key={element.name}> <Link className=' hover:cursor-pointer hover:text-blue-400 hover:underline' to={`/t-pokedex/version-group/${element.name}`}>{element.name}</Link> </li>)
                }
            </ul>
        </div>
    )
}

export default GameversioGroup