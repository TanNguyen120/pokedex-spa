import React from 'react'
import { Link } from 'react-router-dom'

const GameGenBtn = ({ genName, link }) => {
    return (
        <Link to={link} className=' rounded-lg bg-slate-200 hover:scale-110 hover:cursor-pointer p-3 m-2'>
            {genName}
        </Link>
    )
}

export default GameGenBtn