import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

const loader = async ({ params }) => {
    const natureDetails = ((await (axios.get(`https://pokeapi.co/api/v2/nature/${params.natureName}`))).data);

    return natureDetails;
}


const NatureDetails = () => {
    const natureDetails = useLoaderData();
    return (
        <div>
            {JSON.stringify(natureDetails)};
        </div>
    )
}

export { loader }
export default NatureDetails