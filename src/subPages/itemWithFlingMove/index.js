import axios from 'axios';
import React from 'react'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const flingEffectNumber = ((await (axios.get(`https://pokeapi.co/api/v2/item-fling-effect`))).data).count;
    const flingEffectList = (await (axios.get(`https://pokeapi.co/api/v2/item-fling-effect/?offset=0&limit=${flingEffectNumber}`))).data

    return flingEffectList
}

const ItemWithFlingMove = () => {
    return (
        <div>ItemWithFlingMove</div>
    )
}

export { loader }
export default ItemWithFlingMove