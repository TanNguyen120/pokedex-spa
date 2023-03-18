import React, { useEffect, useState } from 'react'
import smoothTile from '../../tool/smoothTile';
import LocationArea from './locationArea';


// button for choosing area details
const AreaBtn = ({ areaName, activeArea, setActiveArea }) => {
    const [bgColor, setBgColor] = useState('');
    useEffect(() => {
        areaName === activeArea ? setBgColor('bg-slate-300 rounded-t-lg') : setBgColor(' bg-white text-slate-200');
    }, [activeArea, areaName])
    return (
        <div className={` rounded-t-lg ${bgColor} hover:bg-slate-300 hover:cursor-pointer  p-3`} onClick={e => { setActiveArea(areaName) }}>
            {smoothTile(areaName)}
        </div>
    )
}



const AreaComponent = ({ areas }) => {
    const [activeArea, setActiveArea] = useState(areas[0].name);

    const toggleActiveArea = (areaName) => {
        setActiveArea(areaName)
    }
    return (
        <div className=' grid grid-cols-1 m-5'>
            <div className=' flex flex-row ml-4'>
                {areas.map((element, index) => <AreaBtn key={index} areaName={element.name} activeArea={activeArea} setActiveArea={toggleActiveArea} />)}
            </div>
            <LocationArea areaName={activeArea} />
        </div>
    )
}

export default AreaComponent