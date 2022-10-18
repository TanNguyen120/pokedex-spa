import React from 'react'
import { Link } from 'react-router-dom'

const GameItemsMenu = ({ clickHandle }) => {
    return (
        <div>
            <div>
                <Link to="/berries">
                    BerriesList
                </Link>
            </div>
        </div>
    )
}

export default GameItemsMenu