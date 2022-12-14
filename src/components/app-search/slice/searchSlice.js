import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get} from "../../../service/net";
import {API_SEARCH_SUGGEST} from "../../../service/net-config";
import {isEmptyObject} from "../../../utils/common-utils";

const initialState = {
    //是否展示搜索结果弹窗
    isShowSearch: false,
    //搜索的关键字
    searchKey: "",
    //正在搜索
    isSearching: false,
    //数据是否为空
    isEmpty: false,
    //单曲
    songs: [],
    //歌手
    artists: [],
    //专辑
    albums: [],
};

///关键字搜索
export const searchSuggest = createAsyncThunk(
    'header/searchSuggest',
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

export const searchSlice = createSlice({
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
                state.isEmpty = isEmptyObject(payload);
                state.songs = payload.songs ?? [];
                state.artists = payload.artists ?? [];
                state.albums = payload.albums ?? [];
            })
            .addCase(searchSuggest.rejected, (state, e) => {
                console.log("🚀 ~ 请求失败！", e.payload)
                state.isSearching = false;
                state.isEmpty = true;
            });
    },

});

export const {setSearchKey, setShowSearch, clearData} = searchSlice.actions;

export default searchSlice.reducer;