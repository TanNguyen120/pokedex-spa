import React from 'react';
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';

const VarietiesButton = ({ pokemon, activeVarieties, setActiveVarieties }) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-slate-400 rounded-t-lg text-base font-medium hover:cursor-pointer mx-1" onClick={e => { dispatch(findPokeByID(pokemon.url)) }}>
            {pokemon.name}
        </div>
    )
}

export default VarietiesButton