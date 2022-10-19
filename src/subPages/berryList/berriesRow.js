import React from 'react'

const BerriesRow = ({ berry }) => {
    return (
        <div className=' flex flex-col p-2 rounded-xl border-2 border-slate-400 m-2 bg-slate-300 hover:cursor-pointer hover:scale-110 hover:bg-slate-200'>
            <img src={`https://www.serebii.net/itemdex/sprites/pgl/${berry.name + 'berry'}.png`} alt={berry.name} />
            <div className=' text-md capitalize '>{berry.name} berry</div>
        </div>
    )
}

export default BerriesRow