import React from 'react'

const BerryDescription = ({ berryEffect }) => {
    return (
        <div className=' border-4 border-slate-600 p-2 m-2 rounded-lg text-lg font-medium bg-slate-200'>
            {berryEffect.short_effect}
        </div>
    )
}

export default BerryDescription