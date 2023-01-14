import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const itemPocketNumber = ((await (axios.get(`https://pokeapi.co/api/v2/item-pocket/`))).data).count;
    const itemPocket = (await (axios.get(`https://pokeapi.co/api/v2/item-pocket/?offset=0&limit=${itemPocketNumber}`))).data;
    return itemPocket
}

const ItemPocket = () => {
    const itemPocket = useLoaderData();
    return (
        <div>{JSON.stringify(itemPocket)}</div>
    )
}

export { loader }
export default ItemPocket