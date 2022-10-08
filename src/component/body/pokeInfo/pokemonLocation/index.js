import axios from 'axios';
import React, { useEffect } from 'react';
import { FaWalking } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setPokeLocationEncounter } from '../../../../reduxSlicer/singlePokemon';


const PokemonLocation = () => {
    const pokeInfo = useSelector((state) => state.singlePokemon);
    const dispatch = useDispatch();

    const getLocationEncounterData = async (url) => {
        const response = await axios.get(url);
        dispatch(setPokeLocationEncounter(response.data));
    }


    useEffect(() => {
        getLocationEncounterData(pokeInfo.baseData.location_area_encounters);

    }, [pokeInfo.baseData.location_area_encounters])
    return (
        <div className='bg-slate-300 rounded-lg md:m-5 md:col-span-2 col-span-1 grid grid-cols-1'>
            <h1 className="text-lg font-bold mt-1"> Encounter Detail <FaWalking className='inline' /></h1>
            <div>
                {JSON.stringify(pokeInfo.locationEncounter)}
            </div>
        </div>
    )
}

export default PokemonLocation