import React from 'react'
import { Link } from 'react-router-dom'

const GamesNavLink = ({ path, name, icon }) => {
    return (
        <Link to={path}>
            <div className=' hover:text-slate-100 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                {icon} {name}
            </div>
        </Link>
    )
}

export default GamesNavLink