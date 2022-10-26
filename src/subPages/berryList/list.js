import React from 'react'
import BerriesRow from './berriesRow';

const ListBerries = ({ berriesList }) => {
    return (
        <div className=' rounded-lg bg-slate-200 p-2'>
            <div className=' mb-3 border border-b-slate-300 text-lg font-medium text-left pl-2'> Berries List: </div>
            <div className=' grid md:grid-cols-9 grid-cols-3 p-2'>
                {
                    berriesList.map(berry => <BerriesRow berry={berry} key={berry.name} />)
                }
            </div>
        </div>
    )
}

export default ListBerries