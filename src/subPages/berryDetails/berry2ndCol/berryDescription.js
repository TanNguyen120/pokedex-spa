import React, { useState } from 'react'
import BerryEffectMode from './berryEffectMode';

const BerryDescription = ({ berryEffect }) => {
    const [activeMode, setActiveMode] = useState("short");

    // the function passdown to child element to setActiveMode
    const childSetActiveMode = (modeName) => {
        setActiveMode(modeName)
    }
    return (
        <div className=' grid grid-cols-1'>
            <div className=' ml-3 flex flex-row'>
                <BerryEffectMode modeName='short' activeMode={activeMode} setActiveMode={childSetActiveMode} />
                <BerryEffectMode modeName='long' activeMode={activeMode} setActiveMode={childSetActiveMode} />
            </div>
            <div className=' border-4 border-slate-600 p-2 mr-2 ml-2 mb-2 rounded-lg text-lg font-medium bg-slate-200'>
                {activeMode === "short" ? berryEffect.short_effect : berryEffect.effect}
            </div>
        </div>
    )
}

export default BerryDescription