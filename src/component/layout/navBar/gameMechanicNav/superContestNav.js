import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLeaderboard } from 'react-icons/md'

const SuperContestNav = () => {
    return (
        <Link to='/t-pokedex/super-contest'>
            <div className='hover:text-slate-50 text-slate-700 hover:text-lg hover:font-semibold p-2'>
                <MdOutlineLeaderboard className=' inline' /> Super Contest
            </div>
        </Link>
    )
}

export default SuperContestNav