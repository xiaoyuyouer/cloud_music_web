import {configureStore} from '@reduxjs/toolkit'
import headerSlice from "../components/app-search/slice/searchSlice.js";
import loginSlice from "../pages/login/slice/loginSlice";

const store = configureStore({
    reducer: {
        header: headerSlice,
        login: loginSlice
    }
})

export default store