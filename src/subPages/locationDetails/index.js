import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AreaComponent from './areaComponent'
import TileArea from './tileArea'


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {

    const locationList = (await (axios.get(`https://pokeapi.co/api/v2/location/${params.locationName}`))).data

    return locationList
}

const LocationDetails = () => {
    const locationDetails = useLoaderData();
    return (
        <div className=' bg-regionBg bg-repeat  min-w-screen-xl bg-[length:1920px_1080px]  min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <TileArea locationName={locationDetails.name} regionName={locationDetails.region.name} generationName={locationDetails.game_indices} />
                </div>
                <div>
                    <AreaComponent areas={locationDetails.areas} />
                </div>
            </div>
        </div>
    )
}

export { loader }
export default LocationDetails