import React, { useEffect, useState } from 'react'

const FlavorColumn = ({ flavorDetails }) => {
    const [potenHeight, setPotenHeight] = useState("0");

    useEffect(() => {
        setPotenHeight(flavorDetails.potency);
    }, [flavorDetails.potency])
    return (
        <div className=' h-48 bg-slate-200 rounded-lg p-2 grid grid-cols-1 text-center'>
            <div className=' h-40 grid grid-cols-1'>
                <div className={` h-${potenHeight} bg-slate-600 place-self-end w-full text-center`}>
                    {potenHeight > 0 && potenHeight}
                </div>
            </div>
            <div>
                {flavorDetails.flavor.name}
            </div>
        </div>
    )
}

export default FlavorColumn