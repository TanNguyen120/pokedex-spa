import React from 'react'
import { GiBroadsword } from "react-icons/gi"
import MoveRow from './moveRow'
const MoveSetCanvas = ({ moveSets }) => {
    const borderTailWind = 'border border-slate-300';
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black md:m-5 p-2 md:col-span-2 grid grid-cols-1">
            <h3 className='text-lg font-mono font-bold'>
                Move Set <GiBroadsword className='inline' />
            </h3>
            <table className="table-fixed p-2 m-2 bg-white border-collapse border border-slate-400 rounded-lg">
                <thead className=' bg-slate-200 text-lg font-semibold'>
                    <tr>
                        <th className={borderTailWind}>Move</th>
                        <th className={borderTailWind}>Method</th>
                        <th className={borderTailWind}>Require</th>
                    </tr>
                </thead>
                <tbody className='text-left divide-y'>
                    {
                        moveSets.map((element, index) => (
                            <MoveRow key={index} moveData={element} borderTailWind={borderTailWind} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MoveSetCanvas