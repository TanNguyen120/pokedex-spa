import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setPokeData, clearSinglePokeData } from '../../../reduxSlicer/singlePokemon';
import InfoCanvas from './InfoCanvas';
import LoadingSpinner from '../../loadingSpiner';

const PokeInfo = () => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const pokeInfo = useSelector((state) => state.singlePokemon)
    const dispatch = useDispatch();

    // get pokemon info base on findPokeFlag
    useEffect(() => {
        switch (findPokeFlag.searchBy) {
            case "id":
                axios.get('https://pokeapi.co/api/v2/pokemon/' + findPokeFlag.id).then(
                    res => {
                        // clear the state
                        dispatch(clearSinglePokeData());

                        dispatch(setPokeData(res.data))
                    }
                );
                break;

            default:
                break;
        }
    }, [findPokeFlag])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-7 opacity-2'>
            {
                pokeInfo.value ? <InfoCanvas pokemon={pokeInfo.value} /> : <LoadingSpinner />
            }
        </div>
    )
}

export default PokeInfo