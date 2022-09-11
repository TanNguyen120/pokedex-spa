import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setBasePokeData, clearSinglePokeData, setPokeSpecie } from '../../../reduxSlicer/singlePokemon';
import InfoCanvas from './infoCanvas';
import LoadingSpinner from '../../loadingSpiner';
import SpecieCanvas from './specieCanvas';
import MoveSetCanvas from './infoCanvas/moveSetCanvas';



const PokeInfo = () => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const pokeInfo = useSelector((state) => state.singlePokemon)
    const dispatch = useDispatch();

    // the function to get all pokemon data with it relate data

    const getAllData = async (searchCond) => {

        const baseData = await (axios.get('https://pokeapi.co/api/v2/pokemon/' + searchCond));
        dispatch(setBasePokeData(baseData.data));
        const pokeSpecie = await axios.get(baseData.data.species.url);
        dispatch(setPokeSpecie(pokeSpecie.data));
    }

    // get pokemon info base on findPokeFlag
    useEffect(() => {
        dispatch(clearSinglePokeData);
        switch (findPokeFlag.searchBy) {
            case "id":
                getAllData(findPokeFlag.id);
                break;

            default:
                break;
        }
    }, [findPokeFlag])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-7 opacity-2'>
            {
                pokeInfo.baseData ?
                    <InfoCanvas pokemon={pokeInfo} />
                    :
                    <LoadingSpinner />
            }
            {
                pokeInfo.species ?
                    <SpecieCanvas className="place-self-center" specieInfo={pokeInfo.species} />
                    :
                    <LoadingSpinner />
            }
            {
                pokeInfo.baseData ?
                    <MoveSetCanvas moveSets={pokeInfo.baseData.moves} />
                    :
                    <LoadingSpinner />
            }

        </div>
    )
}

export default PokeInfo