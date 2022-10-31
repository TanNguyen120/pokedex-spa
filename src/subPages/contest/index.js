import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const contestList = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/`))).data
    let contestDetails = [];
    await contestList.results.forEach(async element => {
        const contestDetails = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/${element.name}`))).data;
        contestDetails.push(contestDetails);
    });
    return {
        contestList: contestList,
        contestDetails: contestDetails
    }
}
const Contest = () => {
    const contestData = useLoaderData();
    return (
        <div>
            {JSON.stringify(contestData)}
        </div>
    )
}

export default Contest
export { loader }