import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
// loader function later will be call in the router 
const loader = async () => {
    const natureCount = ((await (axios.get(`https://pokeapi.co/api/v2/nature/`))).data).count;
    const natureList = ((await (axios.get(`https://pokeapi.co/api/v2/nature/?limit=${natureCount}&offset=0`))).data).results
    return natureList;
}

const Nature = () => {
    const natureList = useLoaderData();
    return (
        <div>{JSON.stringify(natureList)}</div>
    )
}

export { loader };
export default Nature