import React from 'react'

const SpecieCanvas = ({ specieInfo }) => {
    return (
        <div className='bg-slate-400 rounded-lg p-4 mx-6'>
            {JSON.stringify(specieInfo)}
        </div>
    )
}

export default SpecieCanvas