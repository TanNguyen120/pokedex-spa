import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const eggGroupList = (await (axios.get(`https://pokeapi.co/api/v2/egg-group/`))).data

    return eggGroupList
}
const EggGroup = () => {
    const EggGroups = useLoaderData();
    return (
        <div>{JSON.stringify(EggGroups)}</div>
    )
}

export { loader };
export default EggGroup