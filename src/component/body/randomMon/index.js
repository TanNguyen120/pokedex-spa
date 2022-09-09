import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setCount } from "../../../reduxSlicer/pokemonCount"
import { setPokeData } from '../../../reduxSlicer/singlePokemon';
import { addPokemon, clearPokemonArray } from '../../../reduxSlicer/radomPokemons';
import { FaRegHandPointUp } from 'react-icons/fa'
import PokeFrame from './pokeFrame';
const RadomMonSection = () => {
    // ta phai su dung useSelector va useDispatch de goi toi store va lay state can thiet
    const numberOfMon = useSelector((state) => state.pokemonCount);
    const reloadFlag = useSelector((state) => state.reloadFlag)
    const randomPokemons = useSelector((state) => state.randomPokemon);
    const dispatch = useDispatch();

    // get number of pokemon
    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon-species').then(
            res => {
                dispatch(setCount(
                    res.data.count
                ))
            }
        );
    }, [])


    // get 6 random pokemon from number of Pokemon
    useEffect(() => {
        const selectedNumber = [];
        // empty random pokemon array;
        dispatch(clearPokemonArray());
        for (let index = 0; index < 5; index++) {
            const randomID = Math.floor(Math.random() * numberOfMon.value);
            // check if we had already get number of this pokemon before and if it a number
            if (randomID !== 0 && randomID !== selectedNumber[index]) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}/`).then(
                    res => {
                        dispatch(addPokemon(res.data));
                        // show the information of middle pokemon
                        if (index === 2) {
                            dispatch(setPokeData(res.data))
                        }
                    }
                );
                selectedNumber[index] = randomID;
            }
        }
    }, [numberOfMon, reloadFlag])


    return (
        <div className=" px-14 py-14 grid grid-cols-1 md:grid-cols-5 gap-20 ">
            <PokeFrame pokeImg={randomPokemons.length >= 5 ? randomPokemons[0].sprites.front_default : "loading"} pokeId={randomPokemons.length >= 5 ? randomPokemons[0].id : "loading"} />
            <PokeFrame pokeImg={randomPokemons.length >= 5 ? randomPokemons[1].sprites.front_default : "loading"} pokeId={randomPokemons.length >= 5 ? randomPokemons[1].id : "loading"} />
            <PokeFrame pokeImg={randomPokemons.length >= 5 ? randomPokemons[2].sprites.front_default : "loading"} pokeId={randomPokemons.length >= 5 ? randomPokemons[2].id : "loading"} />
            <PokeFrame pokeImg={randomPokemons.length >= 5 ? randomPokemons[3].sprites.front_default : "loading"} pokeId={randomPokemons.length >= 5 ? randomPokemons[3].id : "loading"} />
            <PokeFrame pokeImg={randomPokemons.length >= 5 ? randomPokemons[4].sprites.front_default : "loading"} pokeId={randomPokemons.length >= 5 ? randomPokemons[4].id : "loading"} />

            <div className='col-start-2 col-span-3 bg-slate-300 font-mono text-xl font-semibold p-6 ring-offset-2 ring-2 ring-red-300 rounded-full animate-bounce'>
                Pick One To See Detail <span>
                    <FaRegHandPointUp className='inline' />
                </span>
            </div>
        </div>
    )
}

export default RadomMonSection