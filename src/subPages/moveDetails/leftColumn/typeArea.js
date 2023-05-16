import React from 'react'
import typeToColor from '../../../tool/typeColor'

const TypeArea = ({ typeName }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-50 my-4 '>
            <div className=' text-left text-slate-500 ml-5'>
                Type:
            </div>
            <div className='  p-5 w-32'>
                <div className={` rounded-lg px-3 py-2 ${typeToColor(typeName)} text-white font-semibold capitalize`}>
                    {typeName}
                </div>
            </div>
        </div>
    )
}

export default TypeArea