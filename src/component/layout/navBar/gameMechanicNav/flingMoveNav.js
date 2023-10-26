import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineOfflineBolt } from 'react-icons/md'

const FlingMoveNav = () => {
    return (
        <Link to='/t-pokedex/item-fling'>
            <div className=' hover:text-slate-50 text-slate-700 hover:text-lg hover:font-semibold p-2 '>
                <MdOutlineOfflineBolt className=' inline' /> Item Fling Move
            </div>
        </Link>
    )
}

export default FlingMoveNav