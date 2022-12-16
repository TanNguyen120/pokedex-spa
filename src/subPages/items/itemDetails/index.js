import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Attribute from './attribute';
import ItemName from './itemName';
import SpriteFrame from './spriteFrame';


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
                <div className='grid grid-cols-1 bg-slate-200 rounded-lg p-16'>
                    <div className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3'>
                        <SpriteFrame itemName={itemDetails.name} spriteUrl={itemDetails.sprites.default} />
                        <ItemName itemNames={itemDetails.names} />
                    </div>
                    <Attribute attributeList={itemDetails.attributes} />
                </div>
            </div>
        </div>
    )
}

export { loader }
export default ItemsDetails