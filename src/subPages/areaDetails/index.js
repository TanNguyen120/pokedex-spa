import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import LocationArea from '../locationDetails/locationArea'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {

    const areaDetails = (await (axios.get(`https://pokeapi.co/api/v2/location-area/${params.areaName}`))).data

    return areaDetails
}

const LocationDetails = () => {
    const areaDetails = useLoaderData();
    return (
        <div className=' bg-regionBg bg-repeat  min-w-screen-xl bg-[length:1920px_1080px]  min-h-screen font-serif'>
            <div className='md:container md:mx-auto bg-slate-200'>
                <div className=' grid grid-cols-1'>
                    <div className=' text-lg font-semibold p-6 border-b border-slate-400'>
                        <span className=' text-slate-400'>{
                            areaDetails.name
                        } area </span>  in <Link to={`/t-pokedex/location/${areaDetails.location.name}`} className=' inline hover:text-blue-300 hover:underline hover:cursor-pointer text-slate-300'> {areaDetails.location.name}</Link>
                    </div>
                    <div className=' p-6'>
                        <LocationArea areaName={areaDetails.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default LocationDetails