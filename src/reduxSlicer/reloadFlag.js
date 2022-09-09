import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reload: false
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const reloadFlagSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {
        toggleFlag: (state) => {
            state.reload = !state.reload;
        }
    },
})

// Action creators are generated for each case reducer function
// we export two thing in this file the action so we can dispatch it in other component AND the reducer for the store to save our state and reducer

export const { toggleFlag } = reloadFlagSlice.actions

export default reloadFlagSlice.reducer