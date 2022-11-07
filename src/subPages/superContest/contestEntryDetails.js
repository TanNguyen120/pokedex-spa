import React from 'react'
import MoveBtn from './moveBtn'

const ContestEntryDetails = ({ entryRow }) => {
    return (
        <div className=' rounded-lg bg-slate-200 ring-1 ring-slate-400'>
            <div className=' text-left p-3 '>
                Appeal: {entryRow.appeal}
            </div>
            <div className=' font-lg font-semibold'>
                Flavor Text: {entryRow.flavor_text_entries[0].flavor_text}
            </div>
            <div className=' grid md:grid-cols-12 grid-cols-6'>
                {
                    entryRow.moves.map(element => <MoveBtn moveData={element} key={element.url} />)
                }
            </div>
        </div>
    )
}

export default ContestEntryDetails