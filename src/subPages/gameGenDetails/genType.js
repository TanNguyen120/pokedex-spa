import React from 'react'
import typeToColor from '../../tool/typeColor'

const GenTypes = ({ genTypes }) => {
    return (
        <div>
            <div className=' rounded-lg md:col-span-3 col-span-2  border-4 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
                <div className=' text-left m-4 font-base'>
                    New Types That Added In This Generation:
                </div>
                <div className=' bg-slate-100 rounded-lg m-3'>
                    <div className='bg-slate-300 rounded-lg items-center m-1'>
                        <h3 className="text-lg font-mono font-bold">Type</h3>
                        <div className='bg-white rounded-lg p-2 m-2 flex flex-col md:flex-row items-center justify-center'>
                            {genTypes.map((type, index) => (
                                <div className={`${typeToColor(type.name)} rounded-md text-white text-center text-lg font-semibold border border-indigo-600 m-1 px-2 font-mono hover:cursor-pointer w-24 h-8`} key={index}>
                                    {type.name[0].toUpperCase() + type.name.slice(1)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenTypes