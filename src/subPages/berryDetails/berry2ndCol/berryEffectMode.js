import React from 'react'

const BerryEffectMode = ({ activeMode, modeName, setActiveMode }) => {
    let bg = ""
    activeMode === modeName ? bg = "bg-slate-200" : bg = "bg-inherit";
    return (
        <div className={`${bg} rounded-t-lg p-1 hover:bg-slate-300 hover:cursor-pointer`} onClick={e => { (setActiveMode(modeName)) }}>{modeName}</div>
    )
}

export default BerryEffectMode