import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';


const CheckCanvas = ({ isBaby, isLegend, isMythical }) => {
    // the icon component
    const CheckValue = ({ value }) => {
        return (
            <div>
                {value ? <AiOutlineCheck className='inline text-green-600' /> : <AiOutlineClose className='inline text-red-600' />}

            </div>
        )
    }
    // the button to show info
    const SmallBtn = ({ tile, value }) => {
        return (
            <div className='bg-slate-300 p-2 rounded-lg mx-2 font-md md:mt-0 mt-2'>
                <div className="font-semibold text-sm">{tile}</div>
                <div className='bg-white rounded-lg mx-1 p-1'>
                    {<CheckValue value={value} />}
                </div>
            </div>
        )
    }
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 p-2 '>
            <SmallBtn tile='Baby pokémon' value={isBaby} />
            <SmallBtn tile='Legendary pokémon' value={isLegend} />
            <SmallBtn tile='Mythical pokémon' value={isMythical} />
        </div>
    )
}

export default CheckCanvas