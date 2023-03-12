import React from 'react'
import { Link } from 'react-router-dom'

const LocationRow = ({ locationName, region }) => {
    return (
        <div className=' p-3 grid hover:cursor-pointer hover:bg-slate-400'>
            <Link to={`/t-pokedex/location/${locationName}`} className=' capitalize'>{locationName}</Link>

        </div>
    )
}




const LocationList = ({ locationList, regionName }) => {
    return (
        <div className=' grid md:grid-cols-3 grid-cols-2 p-3 rounded-lg border border-slate-600 divide-y divide-slate-500'>
            {
                locationList.map((element, index) => <LocationRow key={index} locationName={element.name} region={regionName} />)
            }
        </div>
    )
}

export default LocationList