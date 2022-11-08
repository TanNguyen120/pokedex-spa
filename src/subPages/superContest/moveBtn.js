import React from 'react'
import { Link } from 'react-router-dom'

const MoveBtn = ({ moveData }) => {
    return (
        <>
            <Link to={`/moves/${moveData.name}`} className=' hover:cursor-pointer hover:bg-slate-300 hover:scale-125 rounded-lg' >
                <div className=' rounded-lg bg-white text-center hover:bg-slate-300 '>
                    {moveData.name}
                </div>
            </Link>
        </>
    )
}

export default MoveBtn