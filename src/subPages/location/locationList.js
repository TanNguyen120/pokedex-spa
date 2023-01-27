import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner'
import PageSelector from '../../component/utilityComponent/pageSelector'
import LocationRow from './locationRow'

const LocationList = ({ pageCount }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [locationList, setLocationList] = useState(null)
    const setCurPage = (pageNumber) => {
        setCurrentPage(pageNumber - 1)
    }
    useEffect(() => {

        const getLocationData = async () => {
            const locationData = await (await (axios.get(`https://pokeapi.co/api/v2/location/?offset=${(currentPage) * 20}&limit=20`))).data
            setLocationList(locationData);
        }
        getLocationData();
    }, [currentPage]
    )
    return (
        <div>{locationList ? locationList.results.map((element, index) => <LocationRow key={index} locationName={element.name} />) : <LoadingSpinner />}
            <PageSelector numberOfPage={pageCount} currentPage={currentPage + 1} setCurrentPage={setCurPage} />
        </div>
    )
}

export default LocationList