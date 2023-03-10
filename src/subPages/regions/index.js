import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const regionDetails = ((await (axios.get(`https://pokeapi.co/api/v2/region/${params.regionName}`))).data);
    return regionDetails
}
const Regions = () => {
    const regionDetails = useLoaderData();
    return (
        <div className=' bg-regionBg bg-repeat min-w-screen-xl min-h-screen font-serif'>
            <div className=' lg:container lg:mx-auto grid grid-cols-1 bg-slate-50'>
                {
                    JSON.stringify(regionDetails)
                }
            </div>
        </div>
    )
}

export { loader }
export default Regions