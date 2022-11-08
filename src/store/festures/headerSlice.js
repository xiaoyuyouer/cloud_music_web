import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get} from "../../service/net";
import {API_SEARCH_SUGGEST} from "../../service/net-config";

const initialState = {
    //是否展示搜索结果弹窗
    isShowSearch: false,
    //搜索的关键字
    searchKey: "",
    result: {},
};

///关键字搜索
export const searchSuggest = createAsyncThunk(
    'search/suggest',
    async (searchKey, {rejectWithValue}) => {
        try {
            const response = await get(
                API_SEARCH_SUGGEST, {'keywords': searchKey}
            );
            return response.result;
        } catch (e) {
            return rejectWithValue(e)
        }

    }
)

export const headerSlice = createSlice({
    // app header redux
    name: "header",
    initialState,
    reducers: {
        setSearchKey: (state, {payload}) => {
            state.searchKey = payload.searchKey;
        },
        setShowSearch: (state, {payload}) => {
            state.isShowSearch = payload.isShowSearch;
        },
    },

    extraReducers(builder) {
        builder
            .addCase(searchSuggest.pending, (state) => {
                console.log("🚀 ~ 进行中！")
            })
            .addCase(searchSuggest.fulfilled, (state, {payload}) => {
                console.log("🚀 ~ 请求完成！", payload);
                state.result = payload;
            })
            .addCase(searchSuggest.rejected, (state, e) => {
                console.log("🚀 ~ 请求失败！", e.payload)
            });
    },

});

export const {setSearchKey, setShowSearch,} = headerSlice.actions;

export default headerSlice.reducer;