import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import QuickInfo from './quickInfo';

const Pokemon = ({ pokemon }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);

    const [pictureSrc, setPictureSrc] = useState(pokemon.sprite);

    useEffect(() => {
        const modeToUrl = (pokeId) => {
            let officialIndex = String(pokeId).padStart(3, '0');
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${officialIndex}.png`;
        }

        pictureMode === "sprite" ? setPictureSrc(pokemon.sprite) : setPictureSrc(modeToUrl(pokemon.orderInNationalDex));
    }, [pictureMode, pokemon])

    const dispatch = useDispatch();
    return (
        <div className='text-center text-black m-2  p-2 columns-1 '>
            <div className='bg-magic-circle h-38 w-38 md:h-60 md:w-60 bg-cover bg-center'>
                <img
                    className=" h-full w-full md:h-full md:w-full 
                                hover:cursor-pointer self-center
                                transition ease-in-out delay-50 hover:-translate-y-1 
                                hover:scale-110 duration-150
                                "
                    src={pictureSrc} alt="poke sprite"
                    onClick={
                        e => {
                            dispatch(findPokeByID(pokemon.name));
                        }}
                />
            </div>
            <QuickInfo pokemon={pokemon} />
        </div>
    )
}

export default Pokemon