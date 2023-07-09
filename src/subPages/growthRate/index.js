import axios from 'axios';
import React from 'react';
// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const growthRate = (await (axios.get('https://pokeapi.co/api/v2/growth-rate/'))).data;
    return growthRate;
}

const GrowthRate = () => {
    return (
        <div>GrowthRate</div>
    )
}

export { loader };
export default GrowthRate;