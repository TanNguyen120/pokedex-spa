import React, { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import PictureSetting from './pictureSetting'
const DropDownSettings = () => {
    return (
        <div className='group relative h-full '>
            <div className=' grid grid-cols-1 font-semibold text-lg font-mono rounded-t-lg transition-all ease-in-out duration-500 group-hover:cursor-pointer overflow-hidden'>
                <span className="w-0 h-0 rounded bg-slate-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className=' text-lg text-center w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                    <BsFillGearFill className=' hover:animate-spin inline' /> Settings
                </span>
            </div>
            <div className=' rounded-lg group-hover:grid grid-cols-1 text-left p-2 bg-slate-400 text-black hidden w-56 absolute md:mt-9 mt-1'>
                <PictureSetting />
            </div>
        </div>
    )
}

export default DropDownSettings