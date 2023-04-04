import React from 'react'
import { Link } from 'react-router-dom'
import SpriteFrame from '../items/itemDetails/spriteFrame'

const ItemCategoryRow = ({ itemName }) => {
    return (
        <div className='grid grid-cols-1 px-4'>
            <div className=''>
                <Link to={`/t-pokedex/item/${itemName}`} className=' rounded-lg bg-white  grid grid-cols-1 hover:scale-125 hover:cursor-pointer'>
                    <div className=' rounded-lg bg-slate-100 p-3 m-3 ring-4 ring-slate-500'>
                        <img className=' h-max w-max' src={`https://img.pokemondb.net/sprites/items/${itemName}.png`} alt={itemName} onError={e => { e.target.onError = null; e.target.src = `https://img.pokemondb.net/sprites/items/${itemName}.png` }} />
                    </div>
                </Link>
            </div>
            <div className=' text-base capitalize text-slate-600 m-3'>
                {itemName}
            </div>

        </div>
    )
}

export default ItemCategoryRow