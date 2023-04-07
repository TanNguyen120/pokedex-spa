import React from 'react'

const ContestEntryRow = ({ rowData }) => {

    return (
        <tr className=' p-3 odd:bg-white even:bg-slate-50 text-slate-600'>
            <td className={`border border-slate-400`}>{rowData.appeal}</td>
            <td className={` border border-slate-400 p-3 `}>{rowData.effect_entries[0].effect}  </td>
            <td className={` border border-slate-400 text-black p-3`}>{rowData.flavor_text_entries[0].flavor_text}</td>
            <td className={`border border-slate-400`}>{rowData.jam}</td>
        </tr>
    )
}

export default ContestEntryRow