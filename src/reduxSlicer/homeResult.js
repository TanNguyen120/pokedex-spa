import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "loading",
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const homeResultSlice = createSlice({
    name: 'homeResult',
    initialState,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
        setResultValue(state, action) {
            state.value = { ...action.payload }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setResultValue } = homeResultSlice.actions

export default homeResultSlice.reducer