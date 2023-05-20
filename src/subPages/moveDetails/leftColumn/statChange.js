import React from 'react'
import { Link } from 'react-router-dom'
const StatHasChange = ({ statHasChange }) => {
    return (
        <div className=' grid grid-cols-2'>
            <Link to={`/t-pokedex/stat/${statHasChange.stat.name}`}>
                <span className=' text-slate-500'>Stat: </span>  {statHasChange.stat.name}
            </Link>
            <div>
                <span className=' text-slate-500'> Change value: </span> {statHasChange.change}
            </div>
        </div>
    )
}


const StatChange = ({ statChange }) => {
    return (
        <div className=' m-2 p-2 rounded-lg bg-slate-100 grid grid-cols-1'>
            <div className=' text-left text-slate-600'>
                Stat Change:
            </div>
            <div className=' rounded-lg bg-white p-3'>
                {
                    statChange ?
                        statChange.length > 0 ?
                            statChange.map((e, i) => <StatHasChange statHasChange={e} key={i} />)

                            : <div className=' text-yellow-400 p-2 text-lg font-semibold'> This move does not change stat !!</div>
                        : <div className=' text-yellow-400 p-2 text-lg font-semibold'> This move does not change stat !!</div>
                }
            </div>
        </div>
    )
}

export default StatChange