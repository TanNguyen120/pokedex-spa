import React from 'react'
import { Link } from 'react-router-dom'

const ItemCategoryBtn = ({ categoryName }) => {
    return (
        <Link to={`/t-pokedex/item-category/${categoryName}`} className=' hover:bg-slate-100 hover:cursor-pointer text-left m-3 p-4 bg-slate-50 rounded-lg px-6 capitalize'>{categoryName}</Link>
    )
}

export default ItemCategoryBtn