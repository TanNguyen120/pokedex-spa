import React from 'react'
import { MdOutlineGrading } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContestNav = () => {
    return (
        <Link to='/t-pokedex/contest'>
            <div className=' hover:text-slate-50 text-slate-700 hover:text-lg hover:font-semibold p-2 '>
                <MdOutlineGrading className=' inline' /> Contest
            </div>
        </Link>
    )
}

export default ContestNav