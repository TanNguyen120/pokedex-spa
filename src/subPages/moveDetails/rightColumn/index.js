import React from 'react'
import FlavourText from './flavourText'

const RightColumn = ({ moveDetails }) => {
    return (
        <div className=' m-2 p-2 rounded-lg bg-slate-200'>
            <FlavourText flavourList={moveDetails.flavor_text_entries} />
        </div>
    )
}

export default RightColumn