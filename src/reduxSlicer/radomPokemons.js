import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const randomPokeSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {
        setNewPokeMonArray: (state, action) => {
            state.value = action.payload
        },
        addPokemon: (state, action) => {
            state.push(action.payload);
        },
        clearPokemonArray: (state) => {
            state = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { setNewPokeMonArray, addPokemon, clearPokemonArray } = randomPokeSlice.actions

export default randomPokeSlice.reducer