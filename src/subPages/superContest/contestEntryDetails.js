import React from 'react'
import MoveBtn from './moveBtn'

const ContestEntryDetails = ({ entryRow }) => {
    return (
        <div className=' rounded-lg bg-slate-200 ring-1 ring-slate-400'>
            <div className=' text-left p-3 text-lg font-semibold'>
                Appeal: <span className=' p-2 m-2 rounded-lg bg-slate-100 font-normal text-base'>{entryRow.appeal} </span>
            </div>
            <div className=' text-lg font-semibold text-left p-3'>
                Flavor Text: <span className=' p-2 m-2 rounded-lg bg-slate-100 font-normal text-base'> {entryRow.flavor_text_entries[0].flavor_text}</span>
            </div>
            <div className=' text-lg font-semibold text-left p-3'>
                Moves:
                <div className=' grid md:grid-cols-10 grid-cols-5 gap-3 bg-slate-100 rounded-lg m-3 p-2 text-base font-normal'>
                    {
                        entryRow.moves.map(element => <MoveBtn moveData={element} key={element.url} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ContestEntryDetails