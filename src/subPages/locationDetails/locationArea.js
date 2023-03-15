import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationArea = ({ areaName }) => {
    const [areaDetails, setAreaDetails] = useState(null)

    useEffect(() => {
        const getAreaData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/location-area/${areaName}`))).data;
            setAreaDetails(resData);
        }

        getAreaData();
    }, [areaName])
    return (
        <div>{JSON.stringify(areaDetails)}</div>
    )
}

export default LocationArea