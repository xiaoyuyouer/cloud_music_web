import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get} from "../../service/net";
import {API_SEARCH_SUGGEST} from "../../service/net-config";

const initialState = {
    //是否展示搜索结果弹窗
    isShowDialog: false,
    //搜索的关键字
    key: "",
    result: {},
};

///关键字搜索
export const searchSuggest = createAsyncThunk(
    'search/suggest',
    async () => {
        return await get(
            API_SEARCH_SUGGEST, {'keywords': 'eEE'}
        )
    }
)

export const headerSlice = createSlice({
    // app header redux
    name: "header",
    initialState,
    reducers: {
        showDialog: (state, {payload}) => {
            state.isShowDialog = payload.isShowDialog;
            console.log(state.isShowDialog);
        },
        searchKey: (state, {payload}) => {
            state.key = payload.key;
            console.log(state.key);
        },
    },

    extraReducers(builder) {
        builder
            .addCase(searchSuggest.pending, (state) => {
                console.log("🚀 ~ 进行中！")
            })
            .addCase(searchSuggest.fulfilled, (state, {payload}) => {
                console.log("🚀 ~ fulfilled", payload);
                state.result = payload;
            })
            .addCase(searchSuggest.rejected, (state, err) => {
                console.log("🚀 ~ rejected", err)
            });
    },

});

export const {showDialog, searchKey,} = headerSlice.actions;

export default headerSlice.reducer;