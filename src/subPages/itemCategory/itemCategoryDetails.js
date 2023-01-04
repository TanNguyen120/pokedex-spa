import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const itemCategory = (await (axios.get(`https://pokeapi.co/api/v2/item-category/${params.categoryName}`))).data;
    return itemCategory
}
const ItemCategoryDetails = () => {
    const itemCategory = useLoaderData();
    return (
        <div>{JSON.stringify(itemCategory)}</div>
    )
}

export { loader }
export default ItemCategoryDetails