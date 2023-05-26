import React from 'react'
import { Link } from 'react-router-dom'
import contestTypeToColor from '../../../tool/contestTypeToColor'

const ContestType = ({ contestType }) => {
    return (
        <div className=' rounded-lg bg-slate-100 m-4 p-2 grid grid-cols-1'>
            <div className=' text-left text-slate-600 pl-5 my-4'>Contest Type: </div>
            <div className=' bg-white rounded-lg p-4'>
                <Link to={`/t-pokedex/contest_type/${contestType}`} className={'rounded-lg p-3 text-white font-semibold capitalize ' + contestTypeToColor(contestType)}>{contestType}</Link>
            </div>
        </div>

    )
}

export default ContestType