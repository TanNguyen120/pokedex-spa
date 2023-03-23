import React from 'react'
import { Link } from 'react-router-dom'

const InfoSmallComponent = ({ tile, detail_info, metric, icon, link }) => {

    return (

        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3 className=' text-slate-500'>
                {tile} {icon}
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 font-medium'>
                {link ? <Link to={link} className="hover:text-lg hover:text-rose-600 hover:cursor-pointer hover:bg-slate-300">{detail_info} {metric}</Link> : <>{detail_info} {metric}</>}
            </div>
        </div>



    )
}

export default InfoSmallComponent