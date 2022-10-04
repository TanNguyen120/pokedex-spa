import React from 'react'
import { GiBroadsword } from "react-icons/gi"
const MoveSetCanvas = ({ moveSets }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black md:m-5 p-2 md:col-span-2">
            <h3 className='text-lg font-mono font-bold'>
                Move Set <GiBroadsword className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black p-2 grid grid-cols-2 md:grid-cols-4'>
                {moveSets.map((element, index) => (
                    <div key={index}>{element.move.name}</div>
                ))}
            </div>
        </div>
    )
}

export default MoveSetCanvas