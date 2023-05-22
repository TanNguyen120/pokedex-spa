import React from 'react'
import FlavourText from './flavourText'
import MetaStat from './metaStat'

const RightColumn = ({ moveDetails }) => {
    return (
        <div className=' m-2 p-2 rounded-lg bg-slate-200'>
            <FlavourText flavourList={moveDetails.flavor_text_entries} />
            <MetaStat metaStat={moveDetails.meta} />
        </div>
    )
}

export default RightColumn