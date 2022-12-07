import React from 'react'
import { Link } from 'react-router-dom'

const GameItemsMenu = () => {
    return (
        <>
            <Link to="/t-pokedex/items-list">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    Items List
                </div>
            </Link>
            <Link to="/t-pokedex/berries">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    Berries
                </div>
            </Link>
        </>
    )
}

export default GameItemsMenu