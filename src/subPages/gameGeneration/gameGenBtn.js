import React from 'react'
import { Link } from 'react-router-dom'

const GameGenBtn = ({ genName }) => {
    return (
        <Link to={`${genName}`} className=' rounded-lg bg-slate-100 hover:bg-slate-300 hover:scale-110 hover:cursor-pointer p-3 m-2 text-slate-600'>
            {genName}
        </Link>
    )
}

export default GameGenBtn