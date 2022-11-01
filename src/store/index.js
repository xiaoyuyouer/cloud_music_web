import {configureStore} from '@reduxjs/toolkit'
import counterSlice from "./festures/counterSlice.js";
import headerSlice from "./festures/headerSlice.js";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        header: headerSlice,
    }
})

export default store