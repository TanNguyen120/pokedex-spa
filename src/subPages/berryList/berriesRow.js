import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BerriesRow = ({ berry }) => {
    const pictureMode = useSelector(state => state.webSettings.pictureMode);
    return (
        <Link to={`/t-pokedex/berries/${berry.name}`} >
            <div className=' grid grid-col-1 p-2 rounded-xl border-2 border-slate-400 m-2 bg-slate-300 hover:cursor-pointer hover:scale-110 hover:bg-slate-200'>
                <img src={pictureMode === 'sprite' ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name + '-berry'}.png` : `https://www.serebii.net/itemdex/sprites/pgl/${berry.name + 'berry'}.png`} alt={berry.name} className="h-full w-full" />
                <div className=' text-md capitalize text-slate-500'>{berry.name} berry</div>
            </div>
        </Link>
    )
}

export default BerriesRow