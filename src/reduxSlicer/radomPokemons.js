import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const randomPokeSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {
        setNewPokeMonArray: (state, action) => {
            state.push(action.payload);
        },
        addPokemon: (state, action) => {
            state.push(action.payload);
        },
        clearPokemonArray: (state) => {
            state.splice(0, state.length)
        }
    },
})

// Action creators are generated for each case reducer function
// we export two thing in this file the action so we can dispatch it in other component AND the reducer for the store to save our state and reducer

export const { setNewPokeMonArray, addPokemon, clearPokemonArray } = randomPokeSlice.actions

export default randomPokeSlice.reducer