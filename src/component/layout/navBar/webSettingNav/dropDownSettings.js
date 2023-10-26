import React from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import Language from './language'
import PictureSetting from './pictureSetting'
const DropDownSettings = () => {
    return (
        <div className='group relative h-full '>
            <div className=' grid grid-cols-1 font-semibold text-lg font-mono rounded-t-lg transition-all ease-in-out duration-500 group-hover:cursor-pointer overflow-hidden'>
                <span className="w-0 h-0 rounded bg-slate-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className=' text-lg text-center w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                    <BsFillGearFill className=' hover:animate-spin inline' /> Settings
                </span>
            </div>
            <div
                className=' rounded-lg group-hover:grid grid-cols-1 text-left p-2 lg:pb-0 pb-44 bg-slate-400  hidden w-56 relative 
                            lg:absolute lg:mt-9 divide-y divide-slate-100 text-slate-600'
            >
                <PictureSetting />
                <Language />
            </div>
        </div>
    )
}

export default DropDownSettings