import {createSlice} from "@reduxjs/toolkit";
import {post} from "../../../service/net";
import {API_QR_CREATE, API_QR_KEY} from "../../../service/net-config";


const initialState = {
    //是否展示登录弹窗
    isShowLogin: false,
    //二维码key
    qrKey: "",
    //二维码url
    qrUrl: "",
};

export async function getQrInfo() {
    ///二维码key生成
    const qrKeyRes = await post(API_QR_KEY);
    let qrKey = qrKeyRes.data.unikey;
    //二维码url生成
    const qrUrlRes = await post(API_QR_CREATE, {'key': qrKey});
    let qrUrl = qrUrlRes.data.qrurl;
    return {
        qrKey: qrKey,
        qrUrl: qrUrl,
    };
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setShowLogin: (state, {payload}) => {
            state.isShowLogin = payload.isShowLogin;
        },
        setQrInfo: (state, {payload}) => {
            state.qrKey = payload.qrKey;
            state.qrUrl = payload.qrUrl;
        },
    },
});

export const {setShowLogin, setQrInfo} = loginSlice.actions;

export default loginSlice.reducer;