import React from 'react'
import { Link } from 'react-router-dom';
import GameItemNav from './gameItemsNav';

import DropDownSettings from './webSettingNav/dropDownSettings';


const NavBar = () => {
    return (
        <div className="bg-slate-300  text-left text-slate-700 grid  md:grid-cols-12 grid-cols-1">
            <div className="mt-1.25 hover:cursor-pointer  md:col-span-3 md:w-full md:h-full w-1/3 h-9/11 col-span-1 ">
                <Link to="/t-pokedex">
                    <img className="h-full w-full mx-6 py-1.5 object-scale-down" src={process.env.PUBLIC_URL + '/pokedexLogo.png'} alt="pokedex Logo" />
                </Link>
            </div>
            <div className=' md:col-span-9 grid md:grid-cols-8 grid-cols-4'>
                <div className='md:ml-8 text-sm font-mono mt-8'>
                    <DropDownSettings />
                </div>
                <div className=' mt-8'>
                    <GameItemNav />
                </div>
                <div className="md:col-start-8 pt-12 font-mono text-sm ">
                    A Web By Tan Nguyen
                </div>
            </div>
        </div>
    )
}

export default NavBar