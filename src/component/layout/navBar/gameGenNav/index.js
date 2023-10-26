import React from 'react'

import { FaLayerGroup } from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'
import { MdHolidayVillage } from 'react-icons/md'
import { IoIosCalculator } from 'react-icons/io'
import { GrMapLocation } from 'react-icons/gr'
import { GiParkBench } from 'react-icons/gi'
import GamesNavLink from './gamesNavLink'
const GameGenNav = () => {
    return (
        <div className='group relative h-full '>
            <div className=' grid grid-cols-1 font-semibold text-lg font-mono rounded-t-lg transition-all ease-in-out duration-500 group-hover:cursor-pointer overflow-hidden'>
                <span className="w-0 h-0 rounded bg-slate-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className=' text-lg text-center w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                    <SiNintendoswitch className='inline' /> Games
                </span>
            </div>
            <div className=' rounded-lg group-hover:grid grid-cols-1 text-left p-2 bg-slate-400 text-slate-700 hidden w-56 relative lg:absolute lg:mt-9 mt-1'>
                <GamesNavLink name='Generations' path='/t-pokedex/generations' icon={<MdHolidayVillage className='inline' />} />
                <GamesNavLink name='PoKéDex' path='/t-pokedex/pokedexs' icon={<IoIosCalculator className='inline' />} />
                <GamesNavLink name='Version Group' path='/t-pokedex/version-group' icon={<FaLayerGroup className='inline' />} />
                <GamesNavLink name='Location' path='/t-pokedex/location' icon={<GrMapLocation className=' inline hover:text-slate-100' />} />
                <GamesNavLink name='Palpark' path='/t-pokedex/palpark_area/' icon={<GiParkBench className=' inline' />} />

            </div>
        </div>
    )
}

export default GameGenNav