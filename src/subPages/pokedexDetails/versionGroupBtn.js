import React from 'react'
import { Link } from 'react-router-dom'

const VersionGroupBtn = ({ versionName }) => {
    return (
        <div>
            <Link to={`/t-pokedex/version-group/${versionName}`} className=' hover:cursor-pointer hover:bg-slate-200 '>{versionName}</Link>
        </div>
    )
}

export default VersionGroupBtn