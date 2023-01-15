import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ItemPocketRow from './itemPocketRow';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const itemPocketNumber = ((await (axios.get(`https://pokeapi.co/api/v2/item-pocket/`))).data).count;
    const itemPocket = (await (axios.get(`https://pokeapi.co/api/v2/item-pocket/?offset=0&limit=${itemPocketNumber}`))).data;
    return itemPocket
}

const ItemPocket = () => {
    const itemPocket = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className=' grid grid-cols-1'>
                            <div>
                                <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold '>
                                    Pockets within the players bag used for storing items by category.
                                </p>
                            </div>
                            <div className=' grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-y-5 mt-8'>
                                {
                                    itemPocket.results.map((element, index) => <ItemPocketRow key={index} pocketName={element.name} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default ItemPocket