import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
        <tr className=' border border-slate-300  odd:bg-white even:bg-slate-50 m-3 divide-x divide-slate-400  hover:bg-slate-300 hover:cursor-pointer'>
            {
                locationDetalis ? <>
                    <td className='p-4 capitalize'>
                        {locationDetalis.name}
                    </td>
                    <td className='p-4 capitalize '>
                        {
                            locationDetalis.region.name ? <Link className=' hover:text-cyan-600 hover:underline' to={`/t-pokedex/region/${locationDetalis.region.name}`}>  {locationDetalis.region.name} </Link> : 'error'
                        }
                    </td>
                    <td className='p-4 capitalize'>
                        {locationDetalis.game_indices[0] ? <Link className=' hover:text-cyan-600 hover:underline' to={`/t-pokedex/generations/${locationDetalis.game_indices[0].generation.name}`}> {locationDetalis.game_indices[0].generation.name} </Link> : 'error'}
                    </td>
                </> : <LoadingSpinner />
            }
        </tr>
    )
}

export default LocationRow