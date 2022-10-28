import React from 'react'
import { Link } from 'react-router-dom'

const ContestNav = () => {
    return (
        <Link to='/contest'>
            <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                Contest
            </div>
        </Link>
    )
}

export default ContestNav