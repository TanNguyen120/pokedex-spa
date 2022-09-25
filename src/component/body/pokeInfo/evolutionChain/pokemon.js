import React from 'react'
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';

const Pokemon = ({ picUrl, name }) => {
    const dispatch = useDispatch();
    return (
        <div className='rounded-lg text-center text-black m-2 h-28 w-28 md:h-60 md:w-60 '>
            <div className='bg-magic-circle bg-cover bg-center w-11/12 h-11/12 '>
                <img className=" w-full h-full hover:cursor-pointer" src={picUrl} alt="poke sprite" onClick={
                    e => {
                        dispatch(findPokeByID(name));
                    }} />
            </div>
            <div className="font-semibold text-base">
                {name}
            </div>
        </div>
    )
}

export default Pokemon