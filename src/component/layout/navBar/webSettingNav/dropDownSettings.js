import React, { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import PictureSetting from './pictureSetting'
const DropDownSettings = () => {
    const [clickToggle, setClickToggle] = useState(false)
    return (
        <div className=' grid grid-cols-1 font-semibold text-lg font-mono hover:cursor-pointer hover:bg-slate-500 hover:h-full '>
            <div
                className=' text-lg text-center'
                onClick={e => { setClickToggle(prevState => !prevState) }}
            >
                <BsFillGearFill className=' hover:animate-spin inline' /> Settings

            </div>
            {
                clickToggle && <div className=' rounded-lg grid grid-cols-1 text-left p-2 bg-slate-400 text-black ring-0 ring-black absolute mt-16'>
                    <PictureSetting setClickToggle={setClickToggle} />
                </div>
            }
        </div>
    )
}

export default DropDownSettings