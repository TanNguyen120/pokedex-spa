import axios from 'axios';

import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import ItemsBtn from './itemsBtn';



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const itemsNumber = ((await (axios.get('https://pokeapi.co/api/v2/item'))).data).count;
    const itemsList = (await (await (axios.get(`https://pokeapi.co/api/v2/item?offset=0&&limit=${itemsNumber}`))).data).results
    return { itemsList: itemsList, count: itemsNumber };
}


const ItemList = () => {
    const loaderData = useLoaderData()
    const [showList, setShowList] = useState(loaderData.itemsList);
    const [filterData, setFilterData] = useState("");

    useEffect(() => {
        const getFilterResult = async () => {
            if (filterData.length > 0) {
                const filterResult = await loaderData.itemsList.filter(item => item.name.includes(filterData))
                setShowList(filterResult)
            } else {
                setShowList(loaderData.itemsList)
            }
        }
        getFilterResult();

    }, [filterData, loaderData])

    return (
        <div className=' bg-seaWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-slate-600  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-8 p-1  '>
                            <img src='https://external-preview.redd.it/oqKx4_OCE9GDuT0Y01awGIGufPKnrESApuOeuqrlsiU.png?auto=webp&s=0d28e05935d39405bcf5dacd777fdbd2d8fc0744' alt='an encounter' className='w-96 h-64' />
                            pokemon Bag
                        </div>
                        <div className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left whitespace-pre-wrap'>

                            Items are another staple of the Pokémon franchise. They are objects to be collected and used for specific purposes, including progressing through the game's storyline, Pokémon capture, healing your Pokémon, helping Pokémon in battle, improving their stats and even evolving Pokémon.


                            Generation 1 introduced a small set of items that could be used on Pokémon, plus several key items. The bag had a limited space and so items needed to be stored in the PC when the bag got full.


                            Generation 2 introduced the concept of held items - items that Pokémon can hold to gain added effects during battles, such as increasing a move's power. New PokéBalls that could be created from Apricorns that grow naturally in the wild. The bag now had different pockets to categorize items (Items, Balls, Key Items, TMs/HMs).


                            Generation 3 greatly expanded on the concept of Berries that was added in Generation 2. They grow in the wild and can be used for HP restoration, status healing and for Pokéblocks.


                            Generation 4 made no changes to general item mechanics, though it did introduce some new items - such as Choice Scarf and Life Orb - that are now very popular in competitive battles.


                            In Generation 5, there was a major change to TMs: they can now be used infinitely. Berries do not grow natively in Unova, but can be obtained from the Pokémon Dream World and transferred to the game. Notable new items include Gems - hold items that enhance moves of a specific type, but are then consumed.
                        </div>
                    </div>

                    <div className=' bg-slate-200 rounded-lg m-8 border border-slate-400'>
                        <div className=' flex flex-row px-9 m-8 rounded-lg '>
                            <div className=' text-lg my-4 p-2 '> Filter: </div>
                            <input type='text' className=' w-1/3 h-9 rounded-lg border border-slate-400 my-4 p-4 bg-white' onChange={e => { setFilterData(e.target.value) }}></input>
                        </div>
                        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-5 p-6'>

                            {
                                showList.map(element => <ItemsBtn name={element.name} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader };
export default ItemList;