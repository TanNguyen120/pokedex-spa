import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import { setPokeVariations } from '../../../../reduxSlicer/singlePokemon';
import toTitleCase from '../../../../tool/upperCaseString';

const VarietiesButton = ({ pokemon, activeVarieties, setActiveVarieties }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(pokemon.url).then(res => {

            dispatch(setPokeVariations(res.data))
        })
    }, [pokemon])
    return (
        <div className="bg-slate-400 rounded-t-lg text-base font-medium hover:cursor-pointer mx-1" onClick={e => { alert("click"); dispatch(findPokeByID(pokemon.name)) }}>
            {toTitleCase(pokemon.name)}
        </div>
    )
}

export default VarietiesButton