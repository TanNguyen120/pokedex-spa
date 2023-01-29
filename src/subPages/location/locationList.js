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
        <div>
            <table className="table-fixed w-full p-3 bg-white border-collapse border border-slate-400 rounded-lg">
                <thead className=' rounded-lg p-4 m-4 bg-slate-100 font-semibold text-base'>
                    <tr>
                        <th>Location</th>
                        <th>Region</th>
                        <th>Game Indices</th>
                    </tr>
                </thead>
                <tbody className='text-left divide-y'>
                    {locationList ? locationList.results.map((element, index) => <LocationRow key={index} locationName={element.name} />) : <LoadingSpinner />}
                </tbody>
            </table>
            <PageSelector numberOfPage={pageCount} currentPage={currentPage + 1} setCurrentPage={setCurPage} />
        </div>
    )
}

export default LocationList