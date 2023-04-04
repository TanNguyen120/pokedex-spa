import React from 'react'

const BerryEffectMode = ({ activeMode, modeName, setActiveMode }) => {
    let bg = ""
    activeMode === modeName ? bg = "bg-slate-200 border-t border-l border-r border-slate-500" : bg = "bg-inherit";
    return (
        <div className={`${bg} rounded-t-lg py-1 px-3 hover:bg-slate-300 hover:cursor-pointer  text-slate-500 capitalize`} onClick={e => { (setActiveMode(modeName)) }}>{modeName}</div>
    )
}

export default BerryEffectMode