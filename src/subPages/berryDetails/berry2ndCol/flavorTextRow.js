import React from 'react'
import gameToTextColor from '../../../tool/gameToColorText'

const FlavorTextRow = ({ flavorTextRow }) => {
    return (
        <div className='grid grid-cols-4 text-left pl-2'>
            <div className={`${gameToTextColor(flavorTextRow.version_group.name)} col-span-1 mt-2`}>
                {flavorTextRow.version_group.name}
            </div>
            <div className=' col-span-3 p-1 rounded-md bg-slate-50 m-1'>
                {flavorTextRow.text}
            </div>
        </div>
    )
}

export default FlavorTextRow