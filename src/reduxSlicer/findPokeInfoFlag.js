import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchBy: "",
    name: "",
    id: "",
}

// redux tool sử dụng createSlice để giúp chúng ta vừa tạo state vừa tạo các action cho state đó trong khi redux core ta cần phải tạo ra từng thành phần
// ta sẽ khai báo slice này vào store để lưu state toàn cục

export const findPokeInfoFlagSlice = createSlice({
    name: 'findPokeInfoFlag',
    initialState,
    reducers: {
        toggleFindPokeFlag: (state) => {
            state.reload = !state.reload;
        },
        findPokeByID: (state, actions) => {
            state.searchBy = 'id';
            state.id = actions.payload
        },
        findPokeByName: (state, actions) => {
            state.searchBy = 'name';
            state.name = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleFindPokeFlag, findPokeByID, findPokeByName } = findPokeInfoFlagSlice.actions

export default findPokeInfoFlagSlice.reducer