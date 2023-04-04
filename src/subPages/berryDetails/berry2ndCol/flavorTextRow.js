import React from 'react'
import gameToTextColor from '../../../tool/gameToColorText'
import { Link } from 'react-router-dom'

const FlavorTextRow = ({ flavorTextRow }) => {
    return (
        <div className='grid grid-cols-4 text-left pl-2'>
            <Link className={`${gameToTextColor(flavorTextRow.version_group.name)} col-span-1 mt-2 capitalize hover:bg-slate-200 hover:underline`} to={`/t-pokedex/version-group/${flavorTextRow.version_group.name}`}>
                {flavorTextRow.version_group.name}
            </Link>
            <div className=' col-span-3 p-1 rounded-md  m-1 text-slate-700'>
                {flavorTextRow.text}
            </div>
        </div>
    )
}

export default FlavorTextRow