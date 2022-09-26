import React from 'react'
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import QuickInfo from './quickInfo';

const Pokemon = ({ pokemon }) => {
    const dispatch = useDispatch();
    return (
        <div className='text-center text-black m-2  p-2 '>
            <div className='bg-magic-circle h-28 w-28 md:h-60 md:w-60 bg-cover bg-center'>
                <img className=" h-28 w-28 md:h-60 md:w-60 hover:cursor-pointer" src={pokemon.sprite} alt="poke sprite" onClick={
                    e => {
                        dispatch(findPokeByID(pokemon.name));
                    }} />
            </div>
            <QuickInfo pokemon={pokemon} />
        </div>
    )
}

export default Pokemon