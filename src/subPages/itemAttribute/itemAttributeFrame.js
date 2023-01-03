import React from 'react'
import { Link } from 'react-router-dom'
import SpriteFrame from '../items/itemDetails/spriteFrame'

const ItemAttributeFrame = ({ itemName }) => {
    return (
        <Link to={`/t-pokedex/item/${itemName}`} className=' rounded-lg bg-white ring-2 ring-slate-400 grid grid-cols-1 hover:scale-125 hover:cursor-pointer'>
            <SpriteFrame spriteUrl={`https://img.pokemondb.net/sprites/items/${itemName}`} itemName={itemName} />
            <div className=' text-base capitalize font-semibold m-3'>
                {itemName}
            </div>
        </Link>
    )
}

export default ItemAttributeFrame