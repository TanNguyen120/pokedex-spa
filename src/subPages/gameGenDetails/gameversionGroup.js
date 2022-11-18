import React from 'react'

const GameversioGroup = ({ gameVersion }) => {
    return (
        <div className=' rounded-lg md:col-span-3 col-span-2  border-4 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>

            {JSON.stringify(gameVersion)}
        </div>
    )
}

export default GameversioGroup