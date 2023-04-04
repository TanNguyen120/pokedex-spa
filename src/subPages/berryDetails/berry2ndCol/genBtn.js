import React from 'react'
import { Link } from 'react-router-dom'

const GenBtn = ({ gen }) => {
    return (
        <Link to={`/t-pokedex/generations/${gen}`} className=' bg-slate-50 rounded-lg p-2 text-slate-600 capitalize hover:scale-125 hover:cursor-pointer hover:bg-slate-100' >{gen}</Link>
    )
}

export default GenBtn