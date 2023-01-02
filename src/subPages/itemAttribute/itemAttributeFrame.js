import React from 'react'
import SpriteFrame from '../items/itemDetails/spriteFrame'

const ItemAttributeFrame = ({ itemName }) => {
    return (
        <div className=' rounded-lg bg-white ring-2 ring-slate-400 grid grid-cols-1'>
            <SpriteFrame itemName={itemName} />
        </div>
    )
}

export default ItemAttributeFrame