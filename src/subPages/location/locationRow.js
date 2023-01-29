import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';

const LocationRow = ({ locationName }) => {
    const [locationDetalis, setLocationDetails] = useState(null);
    useEffect(() => {
        const getLocationData = async () => {
            const locationData = (await (axios.get(`https://pokeapi.co/api/v2/location/${locationName}`))).data;
            setLocationDetails(locationData);
        }

        getLocationData();
    }, [locationName])
    return (
        <tr className=' border border-slate-300  odd:bg-white even:bg-slate-50 m-3'>
            {
                locationDetalis ? <>
                    <td className='p-4'>
                        {locationDetalis.name}
                    </td>
                    <td className='p-4'>
                        {
                            locationDetalis.region.name
                        }
                    </td>
                    <td className='p-4'>
                        {locationDetalis.game_indices[0].generation.name}
                    </td>
                </> : <LoadingSpinner />
            }
        </tr>
    )
}

export default LocationRow