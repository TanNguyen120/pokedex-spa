import React from 'react'

const RegionInfoTable = ({ tileLabel, contentList }) => {
    return (
        <div className=' rounded-lg bg-slate-300 grid grid-cols-1'>
            <div className=' m-3 font-semibold'>
                {tileLabel}
            </div>
            <div className=' m-2 bg-white rounded-lg grid-cols-1'>
                {
                    contentList.map((element, index) => <div key={index}>{element}</div>)
                }
            </div>
        </div>
    )
}

export default RegionInfoTable