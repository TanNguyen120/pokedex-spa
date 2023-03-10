import React, { useState } from 'react'

const RegionName = ({ regionNames }) => {
    const [regionName, setRegionName] = useState(regionNames[0].name)

    return (
        <div className=' text-lg font-semibold p-2'>
            {regionName}
        </div>
    )
}

export default RegionName