import React from 'react'
import { Link } from 'react-router-dom'

const ItemPocketRow = ({ pocketName }) => {
    return (
        <Link className=' bg-slate-50 hover:bg-slate-300 hover:cursor-pointer' to={`/t-pokedex/item-pocket/${pocketName}`}>{pocketName}</Link>
    )
}

export default ItemPocketRow