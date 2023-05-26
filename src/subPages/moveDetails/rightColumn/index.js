import React from 'react'
import FlavourText from './flavourText'
import MetaStat from './metaStat'
import ContestCombo from './contestCombo'
import ContestEffect from './contestEffect'
import ContestType from './contestType'

const RightColumn = ({ moveDetails }) => {
    return (
        <div className=' m-2 p-2 rounded-lg bg-slate-200'>
            <FlavourText flavourList={moveDetails.flavor_text_entries} />
            <MetaStat metaStat={moveDetails.meta} />
            <ContestType contestType={moveDetails.contest_type.name} />
            <ContestCombo contestCombo={moveDetails.contest_combos} />
            <ContestEffect contestEffect={moveDetails.contest_effect} />
        </div>
    )
}

export default RightColumn