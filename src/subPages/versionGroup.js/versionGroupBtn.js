import React from 'react'
import { Link } from 'react-router-dom'

const VersionGroupBtn = ({ versionName }) => {
    return (
        <Link to={`/t-pokedex/version-group/${versionName}`} className=' rounded-lg bg-slate-300 ring-2 ring-slate-500 m-2 p-2 hover:scale-125 hover:bg-slate-100 hover:cursor-pointer hover:text-blue-500'>
            {versionName}
        </Link>
    )
}

export default VersionGroupBtn