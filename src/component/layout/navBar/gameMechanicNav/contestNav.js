import React from 'react'
import { MdOutlineGrading } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContestNav = () => {
    return (
        <Link to='/t-pokedex/contest'>
            <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                <MdOutlineGrading className=' inline' /> Contest
            </div>
        </Link>
    )
}

export default ContestNav