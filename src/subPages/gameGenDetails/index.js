import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const gameGenDetails = (await (axios.get(`https://pokeapi.co/api/v2/generation/${params.gameGen}`))).data

    return gameGenDetails
}
const GameGenDetails = () => {
    const gameGenDetails = useLoaderData();
    return (
        <div>{JSON.stringify(gameGenDetails)}</div>
    )
}

export { loader }
export default GameGenDetails