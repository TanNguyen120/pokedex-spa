import React from 'react'
import { Link } from 'react-router-dom'

const FlingMoveNav = () => {
    return (
        <Link to='/t-pokedex/item-fling'>
            <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                Item Fling Move
            </div>
        </Link>
    )
}

export default FlingMoveNav