import React from 'react'
import { Link } from 'react-router-dom'

const ItemCategoryBtn = ({ categoryName }) => {
    return (
        <Link to={`/t-pokedex/item-category/${categoryName}`} className='text-slate-600 hover:bg-slate-300 hover:scale-125  hover:cursor-pointer text-left m-3 p-4 bg-slate-50 rounded-lg px-6 capitalize'>{categoryName}</Link>
    )
}

export default ItemCategoryBtn