import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

const loader = async ({ params }) => {
    const berryFlavorList = (await (axios.get(`https://pokeapi.co/api/v2/berry-flavor/${params.flavorName}`))).data
    return {
        list: berryFlavorList,
        flavorName: params.flavorName
    }
}

const BerryFlavorList = () => {
    const berryListData = useLoaderData();
    return (
        <div>
            {JSON.stringify(berryListData)}
        </div>
    )
}


export { loader }
export default BerryFlavorList