import React from 'react'
import ContestBerryRow from './contestBerryRow'

const ContestAndBerries = ({ contestType }) => {
    return (
        <div className=' grid grid-cols-1 m-2 p-2 rounded-lg ring-2 ring-slate-400 bg-slate-200'>
            <div className=' font-semibold text-xl text-left m-4'>
                Each Berry flavor and color represents a specific condition stat that can boost the contest point of pokemon, as shown below.
            </div>
            <div className=' w-1/2'>
                <table className=" table-fixed border-collapse border border-slate-400 w-full rounded-lg">
                    <thead className=' bg-slate-100'>
                        <tr >
                            <th className=' border border-slate-400'>Category</th>
                            <th className=' border border-slate-400'>Flavour</th>
                            <th className=' border border-slate-400'>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            contestType.map(element => <ContestBerryRow rowData={element} key={element.name} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContestAndBerries