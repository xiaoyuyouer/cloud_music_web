import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get} from "../../service/net";
import {API_SEARCH_SUGGEST} from "../../service/net-config";

const initialState = {
    //是否展示搜索结果弹窗
    isShowSearch: false,
    //搜索的关键字
    searchKey: "",
    //正在搜索
    isSearching: false,
    //单曲
    songs: [],
    //歌手
    artists: [],
    //专辑
    albums: [],
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
        clearData: (state, {payload}) => {
            state.songs = [];
            state.artists = [];
            state.albums = [];
        },
    },

    extraReducers(builder) {
        builder
            .addCase(searchSuggest.pending, (state) => {
                console.log("🚀 ~ 进行中！")
                state.isSearching = true;
            })
            .addCase(searchSuggest.fulfilled, (state, {payload}) => {
                console.log("🚀 ~ 请求完成！", payload);
                state.isSearching = false;
                state.songs = payload.songs ?? [];
                state.artists = payload.artists ?? [];
                state.albums = payload.albums ?? [];
            })
            .addCase(searchSuggest.rejected, (state, e) => {
                console.log("🚀 ~ 请求失败！", e.payload)
                state.isSearching = false;
            });
    },

});

export const {setSearchKey, setShowSearch, clearData} = headerSlice.actions;

export default headerSlice.reducer;