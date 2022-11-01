import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from "./festures/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export default store