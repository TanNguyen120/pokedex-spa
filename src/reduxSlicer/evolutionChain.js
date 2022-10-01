import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allInfo: null,
    allChains: null
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

        clearEvolutionChain: (state) => {
            state = initialState;
        },

        setChain: (state, actions) => {
            state.allChains = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setEvolutionChain, clearEvolutionChain, setChain } = evoChainSlice.actions

export default evoChainSlice.reducer