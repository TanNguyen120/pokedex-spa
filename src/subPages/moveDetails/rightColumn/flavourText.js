import React from 'react'
import { Link } from 'react-router-dom'
import gameToTextColor from '../../../tool/gameToColorText'

const FlavourRow = ({ flavourDetails }) => {
    return (
        <div className=' grid grid-cols-2 text-left'>
            <Link
                to={`/t-pokedex/version_group/${flavourDetails.version_group.name}`}
                className={gameToTextColor(flavourDetails.version_group.name)}>
                {flavourDetails.version_group.name}
            </Link>
            <div>
                {flavourDetails.flavor_text}
            </div>
        </div>
    )
}




const FlavourText = ({ flavourList }) => {
    return (
        <div className=' p-2 grid grid-cols-1'>
            <div className=' text-left text-slate-600'>Flavour Text</div>
            <div className=' m-2 p-2 bg-white rounded-lg'>
                {
                    flavourList.map((e, i) => <FlavourRow key={i} flavourDetails={e} />)
                }
            </div>
        </div>
    )
}

export default FlavourText