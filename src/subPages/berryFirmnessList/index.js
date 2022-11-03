import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';


import ListBerries from '../berryList/list';

const loader = async ({ params }) => {
    const berryFirmnessList = (await (axios.get(`https://pokeapi.co/api/v2/berry-firmness/${params.firmnessType}`))).data;


    return {
        list: berryFirmnessList.berries,
        firmnessType: params.firmnessType
    }
}
const BerryFirmnessList = () => {
    const berryListData = useLoaderData();
    return (
        <div className=' bg-blue-abstract bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1'>
                    <div className=' rounded-lg ring-4 ring-slate-400 bg-slate-300 text-lg font-semibold m-3 p-3'>
                        Berries Have <span className={` rounded-lg p-2 mx-2 capitalize`}>  {berryListData.firmnessType}  </span>firmness:
                    </div>
                    <ListBerries berriesList={berryListData.list} />
                </div>
            </div>
        </div>
    )
}

export { loader }
export default BerryFirmnessList