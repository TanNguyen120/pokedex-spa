import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner'

const LocationList = ({ pageCount }) => {
    const [currentPage, SetCurrentPage] = useState(3)
    const [locationList, setLocationList] = useState(null)
    useEffect(() => {

        const getLocationData = async () => {
            const locationData = await (await (axios.get(`https://pokeapi.co/api/v2/location/?offset=${currentPage * 20}&limit=20`))).data
            setLocationList(locationData);
        }
        getLocationData();
    }, [currentPage]
    )
    return (
        <div>{locationList ? JSON.stringify(locationList) : <LoadingSpinner />} </div>
    )
}

export default LocationList