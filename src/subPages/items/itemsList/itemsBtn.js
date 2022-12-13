
import React from 'react'
import { Link } from 'react-router-dom'

const ItemsBtn = ({ name }) => {
    return (
        <Link to={`/t-pokedex/item/${name}`}>
            <div className=' rounded-lg bg-slate-100 ring-2 ring-slate-500 hover:scale-125 hover:cursor-pointer '>
                <img src={`https://img.pokemondb.net/sprites/items/${name}.png`} onError={e => { e.target.onerror = null; e.target.src = `https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg` }} alt={`${name}`} className=' h-full w-full' />
                <div className=' text-base capitalize'>
                    {name}
                </div>
            </div>
        </Link>
    )
}

export default ItemsBtn