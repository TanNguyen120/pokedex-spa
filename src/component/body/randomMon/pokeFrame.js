import React from 'react'
import { useDispatch } from 'react-redux'
import LoadingSpinner from '../../loadingSpiner'
import { findPokeByID } from '../../../reduxSlicer/findPokeInfoFlag'
import { clearSinglePokeData } from '../../../reduxSlicer/singlePokemon'

const PokeFrame = ({ pokeImg, pokeId }) => {
    const dispatch = useDispatch();
    return (
        <div className="columns-sm md:columns-md my-2 md:mx-0 ">
            {
                // render loading spinner if the prob is loading
                pokeImg !== 'loading'
                    ?
                    <div className='bg-magic-circle bg-cover hover:cursor-pointer'>
                        <img className=" w-full h-full" src={pokeImg} alt="poke sprite" onClick={
                            e => {
                                dispatch(clearSinglePokeData());
                                dispatch(findPokeByID(pokeId));
                            }
                        } />
                    </div>
                    :
                    <LoadingSpinner />
            }
        </div>
    )
}

export default PokeFrame