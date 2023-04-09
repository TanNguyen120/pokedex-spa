import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ItemFlingRow from './itemFlingRow';



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    // GET MAX number of item
    const flingEffectNumber = ((await (axios.get(`https://pokeapi.co/api/v2/item-fling-effect`))).data).count;
    // get all item without pagination
    const flingEffectList = (await (axios.get(`https://pokeapi.co/api/v2/item-fling-effect/?offset=0&limit=${flingEffectNumber}`))).data


    return flingEffectList
}

const ItemWithFlingMove = () => {
    const flingItemEffect = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10 text-slate-500'>
                        Item Fling Effects
                        The various effects of the move "Fling" when used with different item
                    </div>
                    <div className=' rounded-lg p-3 bg-slate-200 grid grid-cols-1 '>
                        {
                            flingItemEffect.results.map((element, index) => <ItemFlingRow key={index} itemFling={element} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default ItemWithFlingMove