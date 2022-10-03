import React from 'react'
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import QuickInfo from './quickInfo';

const Pokemon = ({ pokemon }) => {
    const dispatch = useDispatch();
    return (
        <div className='text-center text-black m-2  p-2 columns-1 '>
            <div className='bg-magic-circle h-38 w-38 md:h-60 md:w-60 bg-cover bg-center'>
                <img className=" h-full w-full md:h-full md:w-full hover:cursor-pointer self-center" src={pokemon.sprite} alt="poke sprite" onClick={
                    e => {
                        dispatch(findPokeByID(pokemon.name));
                    }} />
            </div>
            <QuickInfo pokemon={pokemon} />
        </div>
    )
}

export default Pokemon