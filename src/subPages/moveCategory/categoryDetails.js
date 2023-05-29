import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoryDetails = ({ categoryName }) => {
    const [categoryDetails, setCategoryDetails] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/move-category/${categoryName}`))).data;
            setCategoryDetails(resData)
        }
        getData();
    }, [categoryName])
    return (
        <div>{JSON.stringify(categoryDetails)}</div>
    )
}

export default CategoryDetails