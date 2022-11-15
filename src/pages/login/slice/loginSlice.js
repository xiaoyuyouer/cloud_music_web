import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    //是否展示登录弹窗
    isShowLogin: false,
};


export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setShowLogin: (state, {payload}) => {
            state.isShowLogin = payload.isShowLogin;
        },
    },

});

export const {setShowLogin} = loginSlice.actions;

export default loginSlice.reducer;