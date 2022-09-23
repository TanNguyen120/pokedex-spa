import { configureStore } from '@reduxjs/toolkit';
import homeResultReducer from '../reduxSlicer/homeResult';
import pokemonCount from '../reduxSlicer/pokemonCount';
import singlePokemon from '../reduxSlicer/singlePokemon';
import randomPokemon from '../reduxSlicer/radomPokemons';
import searchInput from '../reduxSlicer/searchBarState';
import reloadFlag from '../reduxSlicer/reloadFlag';
import findPokeInfoFlag from '../reduxSlicer/findPokeInfoFlag';
import evolutionChain from '../reduxSlicer/evolutionChain';
// ta sử dụng toolkit để khai báo một store để chứa các reducer
export const store = configureStore({
    reducer: {
        homeResult: homeResultReducer,
        pokemonCount: pokemonCount,
        singlePokemon: singlePokemon,
        randomPokemon: randomPokemon,
        searchInput: searchInput,
        reloadFlag: reloadFlag,
        findPokeInfoFlag: findPokeInfoFlag,
        evolutionChain: evolutionChain
    },
})