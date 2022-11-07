import React from 'react'
import { Link } from 'react-router-dom'

const MoveBtn = ({ moveData }) => {
    return (
        <>
            <Link to={`/moves/${moveData.name}`} >
                <div className=' rounded-lg bg-slate-300'>
                    {moveData.name}
                </div>
            </Link>
        </>
    )
}

export default MoveBtn