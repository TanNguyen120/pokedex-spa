import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const singlePokeSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {

        setData: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData } = singlePokeSlice.actions

export default singlePokeSlice.reducer