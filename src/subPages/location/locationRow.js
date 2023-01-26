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
        <div className=' grid grid-cols-3'>
            {
                locationDetalis ? <>
                    <div>
                        {locationDetalis.name}
                    </div>
                    <div>
                        {
                            locationDetalis.region.name
                        }
                    </div>
                </> : <LoadingSpinner />
            }
        </div>
    )
}

export default LocationRow