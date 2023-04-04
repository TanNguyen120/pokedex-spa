import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../component/loadingSpiner';
import { BiCubeAlt } from 'react-icons/bi'



const ItemPocketDetails = ({ pocketDetails }) => {
    return (
        <div className=' grid grid-cols-1'>
            <div className=' text-left m-3 p-3 text-slate-700'>
                <BiCubeAlt className=' inline' /> {pocketDetails.name}
            </div>
            <div className=' text-left m-3 p-3 text-slate-600'>
                Category in {pocketDetails.name} pocket:
            </div>
            <div className=' bg-slate-50 rounded-lg m-4 p-4 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4'>
                {
                    pocketDetails.categories.map((element, index) => <Link className=' hover:bg-slate-300 rounded-lg hover:scale-105 capitalize' key={index} to={`/t-pokedex/item-category/${element.name}`}> {element.name}</Link>)
                }
            </div>
        </div>
    )
}

const ItemPocketRow = ({ pocketName }) => {
    const [pocketDetails, setPocketDetails] = useState(null);

    useEffect(() => {
        const setPocketDetailsData = async () => {
            const responseData = await (await (axios.get(`https://pokeapi.co/api/v2/item-pocket/${pocketName}`))).data;
            setPocketDetails(responseData);
        }
        setPocketDetailsData();
    }, [pocketName])
    return (
        <div className=' grid grid-cols-1 divide-y-2 divide-slate-300 bg-slate-100 rounded-lg'>
            {
                pocketDetails ? <ItemPocketDetails pocketDetails={pocketDetails} /> : <LoadingSpinner />
            }
        </div>
    )
}

export default ItemPocketRow