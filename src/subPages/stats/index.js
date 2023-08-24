import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const StatsNumber = ((await (axios.get(`https://pokeapi.co/api/v2/stat/`))).data).count;
    const Stats = ((await (axios.get(`https://pokeapi.co/api/v2/stat/?offset=0&limit=${StatsNumber}`))).data).results;
    return Stats;
}


const Stats = () => {
    const statList = useLoaderData();
    return (
        <div>{JSON.stringify(statList)}</div>
    )
}

export { loader };
export default Stats;