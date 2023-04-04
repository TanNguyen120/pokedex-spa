import React from 'react'
import GenBtn from './genBtn'

const AppearInGen = ({ gameIndices }) => {
    return (
        <div className=' m-2 p-1 rounded-lg bg-slate-300'>
            <div className=' text-left font-semibold text-base ml-4 text-slate-400'> Appear In: </div>
            <div className=' grid md:grid-cols-5 grid-cols-3 gap-4 rounded-lg m-3 bg-slate-200 p-2'>
                {
                    gameIndices.map(element => <GenBtn gen={element.generation.name} />)
                }
            </div>
        </div>
    )
}

export default AppearInGen