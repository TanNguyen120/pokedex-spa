import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BerryDetail1 from './berry1stCol/berryDetail1'

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const berryDetails = (await (axios.get(`https://pokeapi.co/api/v2/berry/${params.berryName}`))).data
    return berryDetails
}


const BerryDetails = () => {
    // useLoaderData is a hook which grant us access to the loader function of the router
    const berryDetails = useLoaderData();
    return (
        <div className=' bg-blue-abstract bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1'>
                    <div className=' bg-slate-200 p-2 m-10 font-medium text-base rounded-lg grid md:grid-cols-2 grid-cols-1'>
                        <BerryDetail1 berryData={berryDetails} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BerryDetails
export { loader }