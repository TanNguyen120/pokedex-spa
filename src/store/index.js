import { configureStore } from '@reduxjs/toolkit';
import pokemonCount from '../reduxSlicer/pokemonCount';
import singlePokemon from '../reduxSlicer/singlePokemon';
import randomPokemon from '../reduxSlicer/radomPokemons';
import searchInput from '../reduxSlicer/searchBarState';
import reloadFlag from '../reduxSlicer/reloadFlag';
import findPokeInfoFlag from '../reduxSlicer/findPokeInfoFlag';
import evolutionChain from '../reduxSlicer/evolutionChain';
import currentGameVer from '../reduxSlicer/currentGameVersion';
// ta sử dụng toolkit để khai báo một store để chứa các reducer
export const store = configureStore({
    reducer: {
        pokemonCount: pokemonCount,
        singlePokemon: singlePokemon,
        randomPokemon: randomPokemon,
        searchInput: searchInput,
        reloadFlag: reloadFlag,
        findPokeInfoFlag: findPokeInfoFlag,
        evolutionChain: evolutionChain,
        currentGameVersionMove: currentGameVer
    },
})