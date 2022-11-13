import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import flavorToColor from '../../../tool/flavorsToColor';

const FlavorColumn = ({ flavorDetails }) => {
    const [potenHeight, setPotenHeight] = useState(0);
    const [bgColor, setBgColor] = useState("");
    useEffect(() => {
        setPotenHeight(flavorDetails.potency);
        setBgColor(flavorToColor(flavorDetails.flavor.name));
    }, [flavorDetails])
    return (
        <div className=' h-52 bg-slate-200 rounded-lg py-2 px-9 grid grid-cols-1 text-center'>
            <div className=' h-40 grid grid-cols-1 '>
                <div className={` ${bgColor} place-self-end w-full text-center rounded-sm border-1 border-indigo-800`} style={{ height: (potenHeight * 4) + 2 }}>
                    {potenHeight > 0 && potenHeight}
                </div>
            </div>
            <Link className=' mt-2 hover:cursor-pointer hover:text-lg hover:text-rose-700' to={`/t-pokedex/berries/flavor/${flavorDetails.flavor.name}`}>
                <div >
                    {flavorDetails.flavor.name}
                </div>
            </Link>
        </div>
    )
}

export default FlavorColumn