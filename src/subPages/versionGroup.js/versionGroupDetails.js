import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const versionGroupDetails = (await (axios.get(`https://pokeapi.co/api/v2/version-group/${params.versionName}`))).data
    return versionGroupDetails
}



const VersionGroupDetails = () => {
    const versionGroupDetails = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10 grid grid-cols-2'>
                        {JSON.stringify(versionGroupDetails)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default VersionGroupDetails