import React from 'react'
import { Link } from 'react-router-dom'

const ItemAttributeBtn = ({ attributeName }) => {
    return (
        <Link to={`/t-pokedex/item-attribute/${attributeName}`} className=' hover:bg-slate-100 rounded-lg hover:scale-125 hover:cursor-pointer text-left m-3 p-4'>{attributeName}</Link>
    )
}

export default ItemAttributeBtn