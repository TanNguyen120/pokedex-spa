import axios from 'axios';
import React, { useEffect } from 'react';
import { FaWalking } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setPokeLocationEncounter } from '../../../../reduxSlicer/singlePokemon';
import toTitleCase from '../../../../tool/upperCaseString';
import LoadingSpinner from '../../../loadingSpiner';
import LocationRow from './locationRow';


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
        <div className='bg-slate-300 rounded-lg my-5 lg:m-5 md:mx-9 md:my-3 lg:col-span-2 col-span-1 '>
            <h1 className="text-lg font-semibold text-slate-500 mt-1"> Encounter Detail Of {toTitleCase(pokeInfo.baseData.name)} <FaWalking className='inline' /></h1>
            <div className=' bg-slate-200 rounded-lg m-2 p-4 '>
                <div className=' m-1 rounded-lg bg-white overflow-x-auto w-full  divide-slate-300 divide-y odd:bg-white even:bg-slate-50'>
                    {
                        pokeInfo.locationEncounter ?
                            pokeInfo.locationEncounter.length > 0 ?
                                pokeInfo.locationEncounter.map((element, index) => <LocationRow location={element} key={index} />) :
                                <span className=' text-yellow-600 font-lg '>This Pokémon does not appear in the wild OR does not have data yet !</span> :
                            <LoadingSpinner />
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonLocation