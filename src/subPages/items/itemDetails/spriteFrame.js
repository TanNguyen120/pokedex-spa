import React from 'react'

const SpriteFrame = ({ spriteUrl, itemName }) => {
    return (
        <div className=' rounded-lg bg-slate-100 p-3 m-3 ring-4 ring-slate-500'>
            <img className=' h-full w-full' src={spriteUrl} alt={itemName} onError={e => { e.target.onError = null; e.target.src = `https://img.pokemondb.net/sprites/items/${itemName}.png` }} />
        </div>
    )
}

export default SpriteFrame