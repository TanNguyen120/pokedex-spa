import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEvolutionChain, setPokemonInChain } from '../../../../reduxSlicer/evolutionChain';


const EvolutionChain = ({ evoChainProb }) => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const evoChain = useSelector((state) => state.evolutionChain)
    const dispatch = useDispatch();
    // the ascnycrom axios function
    const getEvolutionChain = async (url) => {
        const res = await axios.get(url);
        dispatch(setEvolutionChain(res.data));
        const pokeArray = [];
        // The below code part is for retrieve the pokemon info in evolution chain
        //===========================================================================================================================
        // Because API response the chain with nested pokemon in an object so we have to use while to get all pokemon data
        // To do that we use a while loop and some flag to go through multiple nested object
        let nextEvolve = res.data.chain;
        while (nextEvolve) {
            pokeArray.push({ name: nextEvolve.species.name, url: nextEvolve.species.url });
            nextEvolve = nextEvolve.evolves_to[0]
        }
        //===========================================================================================================================
        dispatch(setPokemonInChain(pokeArray));

    }
    useEffect(() => {
        getEvolutionChain(evoChainProb);
    }, [evoChainProb]);
    return (
        <div className="bg-slate-300 rounded-lg m-2"> {JSON.stringify(evoChain)}</div>
    )
}

export default EvolutionChain