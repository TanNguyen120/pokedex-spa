import React from 'react'
import { Link } from 'react-router-dom'

const SuperContestNav = () => {
    return (
        <Link to='/super-contest'>
            <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                Super Contest
            </div>
        </Link>
    )
}

export default SuperContestNav