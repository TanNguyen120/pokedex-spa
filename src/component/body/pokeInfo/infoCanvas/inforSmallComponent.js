import React from 'react'

const InfoSmallComponent = ({ tile, detail_info, metric, icon }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3>
                {tile} {icon}
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2'>
                {detail_info} {metric}
            </div>
        </div>
    )
}

export default InfoSmallComponent