import React, { useEffect, useState } from 'react'
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
            <div className=' mt-2'>
                {flavorDetails.flavor.name}
            </div>
        </div>
    )
}

export default FlavorColumn