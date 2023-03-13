import React from 'react'

const TileArea = ({ locationName, regionName, generationName }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-200 p-4'>
            <div className=' font-semibold text-base capitalize'>{locationName}</div>
            <div className=' grid grid-cols-2'>
                <div className=' flex flex-row'>
                    <div className=' text-slate-400'>Region:</div>
                    <div>{regionName}</div>
                </div>
                <div className=' flex flex-row'>
                    <div className=' text-slate-400'>Generation:</div>
                    <div>{generationName}</div>
                </div>
            </div>
        </div>
    )
}

export default TileArea