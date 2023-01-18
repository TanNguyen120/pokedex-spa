import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import LocationList from './locationList';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const locationList = (await (axios.get(`https://pokeapi.co/api/v2/location/`))).data

    return locationList
}

const LocationIndex = () => {
    const locationList = useLoaderData();
    return (
        <div className=' bg-whiteWallPaint bg-scroll   font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 '>
                            <img src='https://img.game-news24.com/2022/08/Pokemon-Scarlet-and-Violet-there-are-a-lot-of-pictures-of-Paldea-s-map-and-new-Pokemon.jpeg' alt='a game map' className='' />
                            Hisui Map
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
                        </p>
                    </div>
                    <div className=' rounded-lg bg-slate-200 border border-slate-400'>
                        <LocationList pageCount={locationList.count} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default LocationIndex