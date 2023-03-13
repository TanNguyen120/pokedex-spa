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
        <tr className=' border border-slate-300  odd:bg-white even:bg-slate-50 m-3 divide-x divide-slate-400 text-slate-600  hover:bg-slate-300 hover:cursor-pointer'>
            {
                locationDetalis ? <>
                    <td className='p-4 capitalize'>
                        <Link className=' hover:underline hover:text-cyan-300' to={`/t-pokedex/location/${locationDetalis.name}`}>
                            {locationDetalis.name}
                        </Link>
                    </td>
                    <td className='p-4 capitalize '>
                        {
                            locationDetalis.region.name ? <Link className=' hover:text-cyan-600 hover:underline' to={`/t-pokedex/regions/${locationDetalis.region.name}`}>  {locationDetalis.region.name} </Link> : 'error'
                        }
                    </td>
                    <td className='p-4 capitalize'>
                        {locationDetalis.game_indices[0] ? <Link className=' hover:text-cyan-600 hover:underline' to={`/t-pokedex/generations/${locationDetalis.game_indices[0].generation.name}`}> {locationDetalis.game_indices[0].generation.name} </Link> : 'error'}
                    </td>
                    <td className='p-4 capitalize'>
                        <ul className=' list-none hover:list-disc ml-6'>
                            {locationDetalis.areas ? locationDetalis.areas.map((element, index) =>
                                <li>
                                    <Link className=' hover:text-cyan-600 hover:underline rounded-lg my-2' to={`/t-pokedex/location-areas/${element.name}`} key={index}>
                                        {element.name}
                                    </Link>
                                </li>
                            ) : <LoadingSpinner />}
                        </ul>
                    </td>
                </> : <LoadingSpinner />
            }
        </tr>
    )
}

export default LocationRow