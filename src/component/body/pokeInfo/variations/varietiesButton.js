
import React from 'react';
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import toTitleCase from '../../../../tool/upperCaseString';

const VarietiesButton = ({ pokemon, activeVarieties }) => {
    const dispatch = useDispatch();
    let bg = 'bg-white text-slate-300';


    if (pokemon.name === activeVarieties) {
        bg = 'bg-slate-400'
    }



    return (
        <div className={`${bg} rounded-t-lg text-base font-medium hover:bg-slate-300 hover:text-white hover:cursor-pointer border border-slate-600`} onClick={e => { dispatch(findPokeByID(pokemon.name)) }}>
            {toTitleCase(pokemon.name)}
        </div>
    )
}

export default VarietiesButton