import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ categoryName }) => {
    const [categoryDetails, setCategoryDetails] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/move-category/${categoryName}`))).data;
            setCategoryDetails(resData)
        }
        getData();
    }, [categoryName])
    return <>
        {
            categoryDetails ?
                <div className=' grid grid-cols-1'>
                    <div className=' m-2 p-2 w-64 grid grid-cols-1 text-left rounded-lg bg-slate-200 gap-4'>
                        <div className=' capitalize'><span className=' text-slate-500'>Category: </span>  {categoryDetails.name}</div>
                        <div> <span className=' text-slate-500'>Description: </span> {categoryDetails.descriptions[0].description} </div>
                    </div>
                    <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 m-2 p-2 rounded-lg bg-slate-200'>
                        {
                            categoryDetails.moves.map((e, i) => <Link key={i} className=' capitalize hover:text-blue-500 hover:cursor-pointer hover:underline rounded-lg bg-slate-100 p-2 m-2' to={`/t-pokedex/move/${e.name}`}> {e.name}</Link>)
                        }
                    </div>
                </div>
                :
                <LoadingSpinner />
        }
    </>
}

export default CategoryDetails