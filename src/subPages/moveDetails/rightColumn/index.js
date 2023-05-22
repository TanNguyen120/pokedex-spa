import React from 'react'
import FlavourText from './flavourText'
import MetaStat from './metaStat'
import ContestCombo from './contestCombo'

const RightColumn = ({ moveDetails }) => {
    return (
        <div className=' m-2 p-2 rounded-lg bg-slate-200'>
            <FlavourText flavourList={moveDetails.flavor_text_entries} />
            <MetaStat metaStat={moveDetails.meta} />
            <ContestCombo contestCombo={moveDetails.contest_combos} />
        </div>
    )
}

export default RightColumn