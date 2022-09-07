import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setCount } from "../../../reduxSlicer/pokemonCount"
import { setData } from '../../../reduxSlicer/singlePokemon';
import PokeFrame from './pokeFrame';
import PokeInfo from './pokeInfo';
const RadomMonSection = () => {
    // ta phai su dung useSelector va useDispatch de goi toi store va lay state can thiet
    const numberOfMon = useSelector((state) => state.pokemonCount);
    const singlePokemon = useSelector((state) => state.singlePokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        // get number of pokemon
        axios.get('https://pokeapi.co/api/v2/pokemon-species').then(
            res => {
                dispatch(setCount(
                    res.data.count
                ))
            }
        );
    }, [])

    useEffect(() => {
        // get a random pokemon from number of Pokemon
        const randomID = Math.floor(Math.random() * numberOfMon.value);
        // check if we had already get number of pokemon
        if (randomID !== 0) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}/`).then(
                res => {
                    dispatch(setData(res.data))
                }
            )
        }
    }, [numberOfMon])


    return (
        <div className="bg-red-space px-2 grid grid-flow-col">
            <PokeFrame pokeImg={singlePokemon.value ? singlePokemon.value.sprites.front_default : "loading"} />
            <PokeInfo pokeInfo={singlePokemon.value ? singlePokemon.value : "loading"} />
        </div>
    )
}

export default RadomMonSection