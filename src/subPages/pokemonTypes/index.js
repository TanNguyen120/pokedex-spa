import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeTypesListNumber = ((await (axios.get(`https://pokeapi.co/api/v2/type/`))).data).count;
    const pokeTypesList = ((await (axios.get(`https://pokeapi.co/api/v2/type/?offset=0&limit=${pokeTypesListNumber}`))).data).results;
    return pokeTypesList;
}


const TypesList = () => {
    const typeList = useLoaderData();
    return (
        <div>{JSON.stringify(typeList)}</div>
    )
}

export { loader };
export default TypesList;