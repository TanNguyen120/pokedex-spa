import React from 'react'
import { Link } from 'react-router-dom'

const GameItemsMenu = () => {
    return (
        <>
            <Link to="/berries">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    BerriesList
                </div>
            </Link>
        </>
    )
}

export default GameItemsMenu