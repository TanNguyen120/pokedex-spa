import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const itemsDetails = ((await (axios.get(`https://pokeapi.co/api/v2/item/${params.itemName}`))).data);
    return itemsDetails
}
const ItemsDetails = () => {
    const itemDetails = useLoaderData();
    return (
        <div className=' bg-seaWhite bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-200 rounded-lg p-3'>
                    <div>{JSON.stringify(itemDetails)}</div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default ItemsDetails