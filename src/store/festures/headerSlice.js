import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isShowDialog: false,
};

export const headerSlice = createSlice({
    // app header redux
    name: "header",
    initialState,
    reducers: {
        // 是否展示搜索结果弹窗
        showDialog: (state, {payload}) => {
            state.isShowDialog = payload.isShowDialog;
            console.log(state.isShowDialog);
        },
    },
});

export const {showDialog} = headerSlice.actions;

export default headerSlice.reducer;