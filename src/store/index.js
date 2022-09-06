import { configureStore } from '@reduxjs/toolkit'
import homeResultReducer from '../reduxSlicer/homeResult'

// ta sử dụng toolkit để khai báo một store để chứa các reducer
export const store = configureStore({
    reducer: {
        homeResult: homeResultReducer
    },
})