import React from 'react'

const LocationRow = ({ location }) => {
    return (
        <div className='grid md:grid-cols-8 grid-cols-4 text-left m-2 p-3'>
            <div>
                {location.version_details.map(
                    element => <div key={element.version.name}>{element.version.name}</div>
                )}
            </div>
            <div className=' md:col-span-7 col-span-3'>
                {location.location_area.name}
            </div>
        </div>
    )
}

export default LocationRow