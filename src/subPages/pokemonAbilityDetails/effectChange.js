import React from 'react'
import { Link } from 'react-router-dom'
const EffectRow = ({ changeRow }) => {
    return (
        <div className=' grid grid-cols-2 text-left p-4'>
            <Link title='version group the change happen' className=' pl-5 hover:cursor-pointer hover:underline hover:text-blue'>Version Group: {changeRow.version_group.name}</Link>
            <div>{changeRow.effect_entries[1].effect}</div>
        </div>
    )
}



const EffectChange = ({ effectChange }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg p-4 bg-slate-200'>
            <div className=' hover:cursor-help' title=''>Effect Change: </div>
            <div className=' grid grid-cols-1 m-2 p-4 rounded-lg bg-slate-50 divide-y'>
                {
                    effectChange.map((e, i) =>
                        <EffectRow key={i} changeRow={e} />
                    )
                }
            </div>
        </div>
    )
}

export default EffectChange