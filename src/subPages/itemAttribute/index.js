import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemAttributeBtn from './itemAttributeBtn';



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const itemAttributeNumber = ((await (axios.get(`https://pokeapi.co/api/v2/item-attribute/`))).data).count;
    const itemAttributes = (await (axios.get(`https://pokeapi.co/api/v2/item-attribute/?offset=0&limit=${itemAttributeNumber}`))).data;


    return itemAttributes
}
const ItemAttribute = () => {
    const itemAttributes = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>

                        <div className=' grid grid-cols-1'>
                            <div>
                                <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold '>
                                    Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable".
                                </p>
                            </div>
                            <div className=' grid lg-grid-cols-6 md:grid-cols-4 grid-cols-2 gap-y-5 mt-8'>
                                <div className=' grid grid-cols-1 p-3 m-3 divide-y divide-slate-300 '>
                                    {
                                        itemAttributes.results.map(element => <ItemAttributeBtn attributeName={element.name} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader };
export default ItemAttribute;