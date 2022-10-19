import React from 'react'
import BerriesRow from './berriesRow';

const ListBerries = ({ berriesList }) => {
    const borderTailWind = 'border border-slate-300';

    return (
        <div className=' rounded-lg bg-slate-200 p-2'>
            <div className=' mb-3 border border-b-slate-300 text-lg font-medium text-left pl-2'> Berries List: </div>
            <div className=' grid grid-cols-9 p-2'>
                {
                    berriesList.map(berry => <BerriesRow berry={berry} />)
                }
            </div>
        </div>
    )
}

export default ListBerries