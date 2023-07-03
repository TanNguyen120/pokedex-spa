import axios from 'axios';
import React from 'react'

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const genDerList = (await (axios.get('https://pokeapi.co/api/v2/gender/'))).data;
    return genDerList;
}


const Gender = () => {
    return (
        <div>Gender</div>
    )
}


export { loader }
export default Gender