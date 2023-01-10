import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaObjectUngroup } from 'react-icons/fa'
import { AiOutlineMoneyCollect } from 'react-icons/ai'
import { RiMoneyCnyCircleFill } from 'react-icons/ri'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent';
import Attribute from './attribute';
import ItemName from './itemName';
import SpriteFrame from './spriteFrame';
import ItemDescription from './itemDescription';
import ItemFlavorText from './itemFlavorText';


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
                    <div className=' grid md:grid-cols-2 grid-cols-1'>
                        <Attribute attributeList={itemDetails.attributes} />
                        <ItemDescription description={itemDetails.effect_entries[0]} />
                    </div>
                    <div className=' m-3 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 bg-slate-100 rounded-lg'>
                        <InfoSmallComponent tile='Category' link={`t-pokedex/item-category/${itemDetails.category.name}`} detail_info={itemDetails.category.name} icon={<FaObjectUngroup className='inline' />} />
                        <InfoSmallComponent tile='Cost' detail_info={itemDetails.cost} icon={<AiOutlineMoneyCollect className='inline' />} metric={<RiMoneyCnyCircleFill className='inline' />} />
                    </div>
                    <ItemFlavorText flavorText={itemDetails.flavor_text_entries} />
                </div>
            </div>
        </div>
    )
}

export { loader }
export default ItemsDetails