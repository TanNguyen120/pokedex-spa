import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegListAlt, FaRaspberryPi } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { CgAttribution } from 'react-icons/cg'
import { GiPocketWatch } from 'react-icons/gi'

const GameItemsMenu = () => {
    return (
        <>
            <Link to="/t-pokedex/items-list">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    <FaRegListAlt className=' inline' /> Items List
                </div>
            </Link>
            <Link to="/t-pokedex/berries">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    <FaRaspberryPi className='inline' /> Berries
                </div>
            </Link>
            <Link to="/t-pokedex/item-category">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    <MdCategory className=' inline' /> Items Category
                </div>
            </Link>
            <Link to="/t-pokedex/item-attribute">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    <CgAttribution className=' inline' /> Items Attribute
                </div>
            </Link>
            <Link to="/t-pokedex/item-pocket">
                <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                    <GiPocketWatch className=' inline' /> Items Pocket
                </div>
            </Link>
        </>
    )
}

export default GameItemsMenu