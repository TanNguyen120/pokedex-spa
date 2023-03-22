import React from 'react'
import typeToColor from '../../../../tool/typeColor'

const TypeCanvas = ({ types }) => {
    return (
        <div className='bg-slate-300 rounded-lg items-center m-1'>
            <h3 className="text-lg font-mono font-bold text-slate-500">Type</h3>
            <div className='bg-white rounded-lg p-2 m-2 flex flex-col md:flex-row items-center justify-center'>
                {types.map((type, index) => (
                    <div className={`${typeToColor(type.type.name)} rounded-md text-white text-center text-lg font-semibold border border-indigo-600 m-1 px-2 font-mono hover:cursor-pointer w-24 h-8`} key={index}>
                        {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TypeCanvas