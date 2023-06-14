import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import NameSection from './nameSection';
import DescriptionSection from './descriptionSection';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {

    const abilityDetails = (await (axios.get(`https://pokeapi.co/api/v2/ability/${params.abilityName}`))).data

    return abilityDetails;
}


const AbilityDetails = () => {
    const abilityDetails = useLoaderData();
    return (
        <div className=' bg-whiteMarble bg-repeat min-h-screen font-serif'>
            <div className='lg:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-300 rounded-lg m-2 p-4'>
                    <NameSection name={abilityDetails.name} names={abilityDetails.names} />
                    <div className=' grid grid-cols-2'>
                        <DescriptionSection description={abilityDetails.effect_entries} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default AbilityDetails