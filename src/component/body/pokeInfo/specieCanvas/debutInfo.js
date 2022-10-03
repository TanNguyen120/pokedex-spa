import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../../loadingSpiner';

const DebutInfo = ({ generation }) => {
    const pokeForm = useSelector(state => state.singlePokemon.form)
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 flex flex-col">
            <h3>
                Debut <FaBirthdayCake className='inline' />
            </h3>
            <div className='bg-white rounded-lg text-center text-black m-2 font-medium'>
                {generation}
            </div>
            <div className='bg-white rounded-lg text-center text-black m-2 font-medium'>
                {pokeForm ? <span> {`pokémon ${pokeForm.version_group.name}  `} </span> : <LoadingSpinner />}
            </div>
        </div>
    )
}

export default DebutInfo