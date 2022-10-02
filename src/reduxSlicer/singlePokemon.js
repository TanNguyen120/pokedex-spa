import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    baseData: null,
    species: null,
    abilities: null,
    shape: null,
    varieties: null,
    form: null,
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const singlePokeSlice = createSlice({
    name: 'singlePokeData',
    initialState,
    reducers: {
        setBasePokeData: (state, action) => {
            state.baseData = action.payload
        },
        clearSinglePokeData: (state, action) => {
            return initialState
        },
        setPokeSpecie: (state, action) => {
            state.species = action.payload
        },
        setPokeAbilities: (state, action) => {
            // console.log("call set")
            // state.abilities ?
            //     state.abilities.push(action.payload) :
            //     state.abilities = [action.payload];
            // ;
            state.abilities = action.payload;
        },
        clearPokeAbility: (state) => {
            state.abilities = null;
        },
        setPokeShape: (state, action) => {
            state.shape = action.payload
        },
        setPokeVariations: (state, action) => {
            state.varieties = action.payload
        },
        setPokeForm: (state, action) => {
            state.form = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
// we export two thing in this file the action so we can dispatch it in other component AND the reducer for the store to save our state and reducer
export const {
    setBasePokeData,
    clearSinglePokeData,
    setPokeSpecie,
    setPokeAbilities,
    clearPokeAbility,
    setPokeShape,
    setPokeVariations,
    setPokeForm,
} = singlePokeSlice.actions

export default singlePokeSlice.reducer