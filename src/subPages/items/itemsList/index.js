import axios from 'axios';
import React from 'react'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const genList = (await (axios.get('https://pokeapi.co/api/v2/generation/'))).data;
    return genList;
}


const ItemList = () => {
    return (
        <div>ItemList</div>
    )
}

export default ItemList