import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEvolutionChain, setPokemonInChain, setEvolutionTree } from '../../../../reduxSlicer/evolutionChain';
import buildTree from '../../../../tool/getEvochainData';
import LoadingSpinner from '../../../loadingSpiner';
import EvoChain from './evoChain';



const EvolutionChain = ({ evoChainProb }) => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const evoChain = useSelector((state) => state.evolutionChain)
    const dispatch = useDispatch();
    // the ascnycrom axios function
    const getEvolutionChain = async (url) => {
        // get the evolution chain object from the API
        const res = await axios.get(url);
        dispatch(setEvolutionChain(res.data));
        const pokeArray = [];
        // The below code part is for retrieve the pokemon info in evolution chain
        //===========================================================================================================================
        // Because API response the chain with nested pokemon in an object so we have to use while to get all pokemon data
        // To do that we use a while loop and some flag to go through multiple nested object
        let nextEvolve = res.data.chain;
        // we also use the stage flag to deal with some multiple evolve form pokemon e.g: eevee
        let stage = 1;
        while (nextEvolve) {
            const singlePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nextEvolve.species.name}`);
            // we just want retrieve basic info of this single pokemon
            const simplePokeData = {
                name: singlePokemon.data.species.name,
                sprite: singlePokemon.data.sprites.front_default,
                stage: stage,
                orderInNationalDex: singlePokemon.data.id,
                type: singlePokemon.data.types
            };
            const evoData = {
                pokemon: simplePokeData,
                condition: nextEvolve.evolution_details
            };
            pokeArray.push(evoData);
            nextEvolve = nextEvolve.evolves_to[0];
            stage++;
        }
        //===========================================================================================================================
        dispatch(setPokemonInChain(pokeArray));

        const evoTree = await buildTree(res.data.chain);
        dispatch(setEvolutionTree(evoTree))

    }
    useEffect(() => {
        getEvolutionChain(evoChainProb);
    }, [evoChainProb]);
    return (
        <div className="bg-slate-300 rounded-lg m-5 col-span-2 grid grid-cols-1 ">
            <h1 className="text-lg font-bold mt-1">Evolution Chain</h1>
            {
                evoChain.pokeMons ? <EvoChain chain={evoChain.pokeMons} />
                    : <h1> This pokémon dosen`t Evolving</h1>
            }
        </div>
    )
}

export default EvolutionChain