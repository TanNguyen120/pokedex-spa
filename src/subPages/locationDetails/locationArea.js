import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner'
import PokemonInArea from './pokemonInArea'

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
        <div>
            {areaDetails ? <PokemonInArea encounter={areaDetails.pokemon_encounters} /> : <LoadingSpinner />}
        </div>
    )
}

export default LocationArea