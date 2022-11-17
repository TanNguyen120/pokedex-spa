import React from 'react'
import TypeCanvas from '../../component/body/pokeInfo/infoCanvas/typeCanvas'

const GenTypes = ({ genTypes }) => {
    return (
        <div>
            <div className=' rounded-lg md:col-span-3 col-span-2  border-4 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
                <div>
                    Types That Appear In This Generation:
                </div>
                <div className=' bg-slate-100 rounded-lg m-3'>
                    <TypeCanvas types={genTypes} />
                </div>
            </div>
        </div>
    )
}

export default GenTypes