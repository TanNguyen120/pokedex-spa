import React, { useState } from 'react'
import { RiInkBottleLine } from 'react-icons/ri'
import GameItemsMenu from './gameItemsMenu';
const GameItemNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    // handle click to toggle menu element on or off
    const toggleMenu = () => {
        setShowMenu(prevSate => !prevSate)
    }
    return (
        <div
            className='font-semibold text-lg font-mono hover:bg-slate-500 hover:cursor-pointer hover:h-full pl-2'
            onClick={e => { toggleMenu() }}
        >

            <div
            >
                <RiInkBottleLine className='inline ' />  Game items
            </div>
            {
                showMenu && <GameItemsMenu clickHandle={toggleMenu} />
            }
        </div>
    )
}

export default GameItemNav