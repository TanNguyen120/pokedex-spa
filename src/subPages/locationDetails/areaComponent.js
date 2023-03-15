import React, { useState } from 'react'
import LocationArea from './locationArea';

const AreaBtn = ({ areaName, activeArea }) => {
    <div>

    </div>
}


// the toggle row 
const AreaChooser = ({ areas, setActiveArea, activeArea }) => {
    return (
        <div className=' flex flex-row'>

        </div>
    )
}


const AreaComponent = ({ areas }) => {
    const [activeArea, setActiveArea] = useState(areas[0].name);
    return (
        <div className=' grid grid-cols-1 bg-slate-300'>
            <LocationArea areaName={activeArea} />
        </div>
    )
}

export default AreaComponent