import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setBasePokeData, clearSinglePokeData, setPokeSpecie, setPokeAbilities, clearPokeAbility, setPokeShape, setPokeForm } from '../../../reduxSlicer/singlePokemon';
import InfoCanvas from './infoCanvas';
import LoadingSpinner from '../../loadingSpiner';
import SpecieCanvas from './specieCanvas';
import MoveSetCanvas from './infoCanvas/moveSetCanvas';
import EvolutionChain from './evolutionChain';
import Variations from './variations';



const PokeInfo = () => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const pokeInfo = useSelector((state) => state.singlePokemon)
    const dispatch = useDispatch();

    // the function to get all pokemon data with it relate data

    const getAllData = async (searchCond) => {
        dispatch(clearSinglePokeData);
        const baseData = await (axios.get('https://pokeapi.co/api/v2/pokemon/' + searchCond));
        dispatch(setBasePokeData(baseData.data));
        // get specie detail info
        const pokeSpecie = await axios.get(baseData.data.species.url);
        dispatch(setPokeSpecie(pokeSpecie.data));
        //get list of detail abilities
        dispatch(clearPokeAbility);
        const tempArray = [];
        // await baseData.data.abilities.forEach(async element => {
        //     // axios.get(element.ability.url).then(
        //     //     (res) => {
        //     //         // we just need the flavor text for the pokemon page and it name
        //     //         const saveData = {
        //     //             name: res.data.names,
        //     //             flavor_text: res.data.flavor_text_entries
        //     //         };
        //     //         dispatch(setPokeAbilities(saveData))
        //     //     }
        //     // )
        //     const res = await axios.get(element.ability.url);
        //     const saveData = {
        //         name: res.data.names,
        //         flavor_text: res.data.flavor_text_entries
        //     };
        //     tempArray.push(saveData);

        // });
        // NOTE: TO AWAIT A LIST OF PROMISE USE await promise all 
        // IF YOU WANT TO DO SOME ASCNYCROM IN THE LOOP WE HAVE TO CALL Promise.all (that all)
        const ablityList = await Promise.all(baseData.data.abilities.map(async element => {
            const res = await axios.get(element.ability.url);
            const returnData = {
                name: res.data.names,
                flavor_text: res.data.flavor_text_entries
            };
            return returnData;
        }));
        dispatch(setPokeAbilities(ablityList));

        const pokeShape = await (await axios.get(pokeSpecie.data.shape.url)).data;
        dispatch(setPokeShape(pokeShape));

        const pokeForm = await (axios.get(baseData.data.forms[0].url));
        dispatch(setPokeForm(pokeForm.data));

    }

    // get pokemon info base on findPokeFlag
    useEffect(() => {
        switch (findPokeFlag.searchBy) {
            case "id":
                getAllData(findPokeFlag.id);
                break;
            default:
                break;
        }
    }, [findPokeFlag])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:m-7 opacity-2 '>
            {
                pokeInfo.species ?
                    <Variations varieties={pokeInfo.species.varieties} />
                    :
                    <LoadingSpinner />
            }
            {
                pokeInfo.baseData ?
                    <InfoCanvas pokemon={pokeInfo} />
                    :
                    <LoadingSpinner />
            }
            {
                pokeInfo.species && pokeInfo.abilities ?
                    <SpecieCanvas className="place-self-center" specieInfo={pokeInfo.species} abilityDetail={pokeInfo.abilities} pokeShape={pokeInfo.shape} />
                    :
                    <LoadingSpinner />
            }
            {
                pokeInfo.species ?
                    <EvolutionChain evoChainProb={pokeInfo.species.evolution_chain.url} />
                    :
                    <LoadingSpinner />
            }
            {
                pokeInfo.baseData ?
                    <MoveSetCanvas moveSets={pokeInfo.baseData.moves} />
                    :
                    <LoadingSpinner />
            }

        </div>
    )
}

export default PokeInfo