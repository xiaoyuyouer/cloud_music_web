import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get} from "../../../service/net";
import {API_QR_CREATE, API_QR_KEY} from "../../../service/net-config";

const initialState = {
    //是否展示登录弹窗
    isShowLogin: false,
};

///二维码key生成
export const getQrKey = createAsyncThunk(
    'login/qrKey',
    async (searchKey, {rejectWithValue}) => {
        try {
            const response = await get(
                API_QR_KEY,
            );
            return response.data;
        } catch (e) {
            return rejectWithValue(e)
        }

    }
)

///二维码生成
function qrCreate(state, unikey) {
    get(
        API_QR_CREATE,
        {'key': unikey}
    ).then(r => {
        console.log('走到了success')
        console.log(r)
    }, e => {
        console.log('走到了error')
        console.log(e)
    })
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setShowLogin: (state, {payload}) => {
            state.isShowLogin = payload.isShowLogin;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getQrKey.pending, (state) => {
                console.log("🚀 ~ 进行中！")
            })
            .addCase(getQrKey.fulfilled, (state, {payload}) => {
                console.log("🚀 ~ 请求完成！", payload);
                console.log(payload.unikey)
                qrCreate(state, payload.unikey);
            })
            .addCase(getQrKey.rejected, (state, e) => {
                console.log("🚀 ~ 请求失败！", e.payload)
            });
    },

});

export const {setShowLogin} = loginSlice.actions;

export default loginSlice.reducer;