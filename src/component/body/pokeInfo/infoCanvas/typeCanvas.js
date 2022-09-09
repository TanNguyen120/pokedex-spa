import React from 'react'
import typeToColor from '../../../../tool/typeColor'

const TypeCanvas = ({ types }) => {
    return (
        <div className='bg-slate-300 rounded-lg items-center m-2 '>
            <h3 className="text-lg font-mono font-bold">Type</h3>
            <div className='bg-white rounded-lg justify-center grid grid-cols-2 md:grid-cols-3 m-2 p-3'>
                {types.map((type, index) => (
                    <div className={`${typeToColor(type.type.name)} rounded-md text-white text-center text-lg font-semibold border border-indigo-600 m-1 px-3 font-mono hover:cursor-pointer`} key={index}>
                        {type.type.name[0].toUpperCase() + type.type.name.slice(1)}

                    </div>
                ))}
            </div>

        </div>
    )
}

export default TypeCanvas