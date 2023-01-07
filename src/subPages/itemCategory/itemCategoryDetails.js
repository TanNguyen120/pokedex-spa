import axios from 'axios';
import React from 'react';
import { GiPocketWatch } from 'react-icons/gi'
import { useLoaderData } from 'react-router-dom';
import InfoSmallComponent from '../../component/body/pokeInfo/infoCanvas/inforSmallComponent';
import ItemInCategory from './itemInCategory';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const itemCategory = (await (axios.get(`https://pokeapi.co/api/v2/item-category/${params.categoryName}`))).data;
    return itemCategory
}
const ItemCategoryDetails = () => {
    const itemCategory = useLoaderData();
    return (
        <div className='md:container md:mx-auto'>
            <div className='grid grid-cols-1'>
                <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                    <div className=' grid grid-cols-1'>

                        <div className=' font-bold text-lg capitalize  '>
                            {itemCategory.name}
                        </div>
                        <div className=' m-4 grid grid-cols-3 lg:grid-cols-9 md:grid-cols-6'>
                            <InfoSmallComponent tile='Pocket Name' detail_info={itemCategory.pocket.name} icon={<GiPocketWatch className=' inline' />} link={`/t-pokedex/pocket-name/${itemCategory.pocket.name}`} />
                        </div>
                        <ItemInCategory categoryName={itemCategory.name} itemList={itemCategory.items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default ItemCategoryDetails