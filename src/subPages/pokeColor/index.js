import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// loader function later will be call in the router 
const loader = async () => {
    const PokeColorCount = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-color/`))).data).count;
    const PokeColorList = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-color/?limit=${PokeColorCount}&offset=0`))).data).results
    return PokeColorList;
}
const PokeColor = () => {
    const colorList = useLoaderData();
    return (
        <div>{JSON.stringify(colorList)}</div>
    )
}

export { loader }
export default PokeColor