import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import AttributeDescription from './attributeDescription';
import ItemsAttributeList from './itemsAttributeList';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const itemAttributes = (await (axios.get(`https://pokeapi.co/api/v2/item-attribute/${params.attributeName}`))).data;
    return itemAttributes
}

const AttributeDetails = () => {
    const attributeDetails = useLoaderData();
    return (

        <div className='md:container md:mx-auto'>
            <div className='grid grid-cols-1'>
                <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>

                    <div className=' grid grid-cols-1'>
                        <div className=' font-bold text-lg capitalize'>
                            {attributeDetails.name} Items
                        </div>
                        <AttributeDescription attributeDescription={attributeDetails.descriptions[0].description} />
                        <ItemsAttributeList attributeName={attributeDetails.name} itemList={attributeDetails.items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default AttributeDetails