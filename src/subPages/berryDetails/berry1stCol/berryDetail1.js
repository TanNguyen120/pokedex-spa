import React from 'react'
import { useSelector } from 'react-redux'
import BerryName from './berryName';

const BerryDetail1 = ({ berryData }) => {
    const pictureMode = useSelector(state => state.webSettings.pictureMode);
    return (
        <div className=' border-3 border-slate-500 m-3 p-2 bg-slate-400  rounded-lg'>
            <div className=' p-2 m-2 grid grid-cols-5 bg-slate-300 rounded-lg '>
                <div className=' border-4 border-slate-500 bg-slate-200 m-2 p-2 rounded-xl col-span-1'>
                    <img className='h-full w-full' src={pictureMode === "sprite" ? berryData.itemDetails.sprites.default : `https://www.serebii.net/itemdex/sprites/pgl/${berryData.berryDetails.name + 'berry'}.png`} alt={berryData.itemDetails.name} />
                </div>
                <BerryName berryName={berryData.itemDetails.names} />
                <div className='border-4 border-slate-500 bg-slate-200 m-2 p-2 rounded-xl col-span-1'>
                    Number No.{String(berryData.berryDetails.id).padStart(3, '0')}
                </div>
            </div>
        </div>
    )
}

export default BerryDetail1