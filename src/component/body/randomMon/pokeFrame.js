import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../loadingSpiner'
import { findPokeByID } from '../../../reduxSlicer/findPokeInfoFlag'
import { clearSinglePokeData } from '../../../reduxSlicer/singlePokemon'

const PokeFrame = ({ pokeImg, pokeId }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    const spriteMode = (<div
        className='bg-magic-circle bg-cover hover:cursor-pointer 
                        transition ease-in-out delay-50 hover:-translate-y-1 
                        hover:scale-200 duration-150'>
        <img className=" w-full h-full 
                                transition ease-in-out delay-50 hover:-translate-y-1 
                                hover:scale-200 duration-150" src={pokeImg} alt="poke sprite"
            onClick={e => {
                dispatch(clearSinglePokeData());
                dispatch(findPokeByID(pokeId));
            }
            } />
    </div>);
    const drawMode = (pokeId) => {
        // add zero to match the id length of the picture API 
        let officialIndex = String(pokeId).padStart(3, '0');
        return (
            <div
                className='bg-magic-circle bg-cover hover:cursor-pointer 
                        transition ease-in-out delay-50 hover:-translate-y-1 
                        hover:scale-200 duration-150'>
                <img className=" w-full h-full 
                                transition ease-in-out delay-50 hover:-translate-y-1 
                                hover:scale-200 duration-150" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${officialIndex}.png`} alt="poke sprite"
                    onClick={e => {
                        dispatch(clearSinglePokeData());
                        dispatch(findPokeByID(pokeId));
                    }
                    } />
            </div>
        )
    }

    return (
        <div className="columns-sm md:columns-md my-2 md:mx-0 ">
            {
                // render loading spinner if the prob is loading
                pokeImg !== 'loading'
                    ?
                    pictureMode === 'sprite' ?
                        spriteMode
                        :
                        drawMode(pokeId)
                    :
                    <LoadingSpinner />
            }
        </div>
    )
}

export default PokeFrame