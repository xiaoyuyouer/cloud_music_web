import {configureStore} from '@reduxjs/toolkit'
import counterSlice from "./festures/counterSlice.js";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export default store