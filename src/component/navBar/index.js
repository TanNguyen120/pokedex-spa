import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DropDownSettings from './dropDownSettings';


const NavBar = () => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    return (
        <div className="bg-red-600 text-left text-white grid  md:grid-cols-12 grid-cols-2">
            <div className="mt-1.25 hover:cursor-pointer  md:col-span-3 " onClick={e => {
                window.location.reload()
            }}>
                <img className="h-full w-full mx-6 py-1.5 object-scale-down" src={process.env.PUBLIC_URL + '/pokedexLogo.png'} alt="pokedex Logo" />
            </div>
            <div className=' col-start-5 text-sm font-mono'>
                <DropDownSettings />
            </div>
            <div className="col-start-12 pt-12 font-mono text-sm ">
                A Web By Tan Nguyen
            </div>
        </div>
    )
}

export default NavBar