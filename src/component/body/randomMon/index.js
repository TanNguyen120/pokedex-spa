import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setCount } from "../../../reduxSlicer/pokemonCount"
import { setData } from '../../../reduxSlicer/singlePokemon';
import PokeFrame from './pokeFrame';
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
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${randomID}/`).then(
                res => {
                    console.log(res.data);
                    dispatch(setData(res.data))
                }
            )
        }
    }, [numberOfMon])


    return (
        <div className="bg-red-space px-2">radomMonSection of {numberOfMon.value} Pokemons
            <PokeFrame pokeImg={singlePokemon} />
        </div>
    )
}

export default RadomMonSection