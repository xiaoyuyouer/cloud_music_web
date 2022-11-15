import {configureStore} from '@reduxjs/toolkit'
import counterSlice from "./festures/counterSlice.js";
import headerSlice from "../components/app-search/slice/searchSlice.js";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        header: headerSlice,
    }
})

export default store