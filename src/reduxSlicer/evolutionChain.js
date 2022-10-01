import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pokeMons: null,
    allInfo: null,
    evolutionTree: null,
    evoChains: null
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const evoChainSlice = createSlice({
    name: 'evolutionChain',
    initialState,
    reducers: {
        setEvolutionChain: (state, actions) => {
            state.allInfo = actions.payload
        },
        setPokemonInChain: (state, actions) => {
            state.pokeMons = actions.payload
        },
        clearEvolutionChain: (state) => {
            state = initialState;
        },
        setEvolutionTree: (state, actions) => {
            state.evolutionTree = actions.payload
        },
        setChain: (state, actions) => {
            state.evoChains = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setEvolutionChain, clearEvolutionChain, setPokemonInChain, setEvolutionTree, setChain } = evoChainSlice.actions

export default evoChainSlice.reducer