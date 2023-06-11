import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {

    const abilityDetails = (await (axios.get(`https://pokeapi.co/api/v2/ability/${params.abilityName}`))).data

    return abilityDetails;
}


const AbilityDetails = () => {
    const abilityDetails = useLoaderData();
    return (
        <div>{JSON.stringify(abilityDetails)}</div>
    )
}

export { loader }
export default AbilityDetails