import React from 'react'
import { SiNintendo3Ds } from 'react-icons/si'

import ContestNav from './contestNav'
import EncounterNav from './encounterNav'
import FlingMoveNav from './flingMoveNav'
import SuperContestNav from './superContestNav'
import { TbHandMove } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { MdCategory } from 'react-icons/md'
import { FaHouseDamage } from 'react-icons/fa'

const GameMechanicNav = () => {
    return (
        <div className='group relative h-full '>
            <div className=' grid grid-cols-1 font-semibold text-lg font-mono rounded-t-lg transition-all ease-in-out duration-500 group-hover:cursor-pointer overflow-hidden'>
                <span className="w-0 h-0 rounded bg-slate-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className=' text-lg text-center w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                    <SiNintendo3Ds className='inline' /> Game Mechanic
                </span>
            </div>
            <div className=' rounded-lg group-hover:grid grid-cols-1 text-left p-2 bg-slate-400 text-black hidden w-56 relative lg:absolute lg:mt-9 mt-1'>
                <ContestNav />
                <SuperContestNav />
                <EncounterNav />
                <FlingMoveNav />
                <Link to='/t-pokedex/move/'>
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <TbHandMove className=' inline' /> Move
                    </div>
                </Link>
                <Link to='/t-pokedex/move-category/'>
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <MdCategory className=' inline' /> Move Category
                    </div>
                </Link>
                <Link to='/t-pokedex/move-damage-class/'>
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <FaHouseDamage className=' inline' /> Move Damage Class
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GameMechanicNav