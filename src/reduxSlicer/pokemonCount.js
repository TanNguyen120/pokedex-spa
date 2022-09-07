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
export const { setCount } = pokeCountSlice.actions

export default pokeCountSlice.reducer