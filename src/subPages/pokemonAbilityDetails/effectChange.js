import React from 'react'
import { Link } from 'react-router-dom'
const EffectRow = ({ changeRow }) => {
    return (
        <div className=' grid grid-cols-2 text-left'>
            <Link title='version group the change happen' className=' pl-5 hover:cursor-pointer hover:underline hover:text-blue'>{changeRow.version_group.name}</Link>
            <div>{changeRow.effect_entries.effect}</div>
        </div>
    )
}



const EffectChange = () => {
    return (
        <div className=' grid grid-cols-1 rounded-lg p-4 bg-slate-200'>
            <div className=' hover:cursor-help' title=''>Effect Change: </div>
            <div className=' grid grid-cols-1'>

            </div>
        </div>
    )
}

export default EffectChange