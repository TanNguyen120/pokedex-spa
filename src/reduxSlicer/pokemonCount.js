import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const pokeCountSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {

        setCount: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
// we export two thing in this file the action so we can dispatch it in other component AND the reducer for the store to save our state and reducer

export const { setCount } = pokeCountSlice.actions

export default pokeCountSlice.reducer