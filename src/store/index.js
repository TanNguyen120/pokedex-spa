import { configureStore } from '@reduxjs/toolkit';
import homeResultReducer from '../reduxSlicer/homeResult';
import pokemonCount from '../reduxSlicer/pokemonCount';
import singlePokemon from '../reduxSlicer/singlePokemon';
import randomPokemon from '../reduxSlicer/radomPokemons';

// ta sử dụng toolkit để khai báo một store để chứa các reducer
export const store = configureStore({
    reducer: {
        homeResult: homeResultReducer,
        pokemonCount: pokemonCount,
        singlePokemon: singlePokemon,
        randomPokemon: randomPokemon
    },
})