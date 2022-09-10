import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    baseData: null,

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
        clearSinglePokeData: (state) => {
            state = initialState;
        }
    },
})

// Action creators are generated for each case reducer function
// we export two thing in this file the action so we can dispatch it in other component AND the reducer for the store to save our state and reducer
export const { setBasePokeData, clearSinglePokeData } = singlePokeSlice.actions

export default singlePokeSlice.reducer