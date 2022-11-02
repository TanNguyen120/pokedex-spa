import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import flavorToColor from '../../tool/flavorsToColor';

import ListBerries from '../berryList/list';

const loader = async ({ params }) => {
    const berryFlavorList = (await (axios.get(`https://pokeapi.co/api/v2/berry-flavor/${params.flavorName}`))).data;
    let beautyBerryList = [];
    await berryFlavorList.berries.forEach(element => {
        beautyBerryList.push(element.berry)
    })

    return {
        list: beautyBerryList,
        flavorName: params.flavorName
    }
}

const BerryFlavorList = () => {
    const berryListData = useLoaderData();
    return (
        <div className=' bg-blue-abstract bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1'>
                    <div className=' rounded-lg ring-4 ring-slate-400 bg-slate-300 text-lg font-semibold m-3 p-3'>
                        Berries Have <span className={` rounded-lg ${flavorToColor(berryListData.flavorName)} p-2 mx-2`}>  {berryListData.flavorName}  </span>flavor:
                    </div>
                    <ListBerries berriesList={berryListData.list} />
                </div>
            </div>
        </div>
    )
}


export { loader }
export default BerryFlavorList