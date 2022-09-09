import React from 'react'
import { useDispatch } from 'react-redux'
import LoadingSpinner from '../../loadingSpiner'
import { findPokeByID } from '../../../reduxSlicer/findPokeInfoFlag'

const PokeFrame = ({ pokeImg, pokeId }) => {
    const dispatch = useDispatch();
    return (
        <>
            {
                // render loading spinner if the prob is loading
                pokeImg !== 'loading'
                    ?
                    <div className='bg-magic-circle bg-cover hover:cursor-help'>
                        <img className=" w-full h-full" src={pokeImg} alt="poke sprite" onClick={
                            e => {
                                dispatch(findPokeByID(pokeId));

                            }
                        } />
                    </div>
                    :
                    <LoadingSpinner />
            }
        </>
    )
}

export default PokeFrame