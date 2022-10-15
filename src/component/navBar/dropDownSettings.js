import React, { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import PictureSetting from './pictureSetting'
const DropDownSettings = () => {
    const [clickToggle, setClickToggle] = useState(false)
    return (
        <div className=' grid grid-cols-1'>
            <div
                className=' text-lg hover:cursor-pointer text-center '
                onClick={e => { setClickToggle(prevState => !prevState) }}
            >
                <BsFillGearFill className=' hover:animate-spin' />
            </div>
            {
                clickToggle && <div className=' rounded-lg grid grid-cols-1 text-left p-2 bg-slate-200 text-black'>
                    <PictureSetting />
                </div>
            }
        </div>
    )
}

export default DropDownSettings