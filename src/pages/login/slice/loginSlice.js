import {createSlice} from "@reduxjs/toolkit";
import {post} from "../../../service/net";
import {API_QR_CREATE, API_QR_KEY} from "../../../service/net-config";


const initialState = {
    //是否展示登录弹窗
    isShowLogin: false,
    //二维码url
    qrUrl: "",
};

export async function getQrCode() {
    ///二维码key生成
    const qrKeyRes = await post(API_QR_KEY);
    let uniKey = qrKeyRes.data.unikey;
    console.log(uniKey);
    //二维码url生成
    const qrUrlRes = await post(API_QR_CREATE, {'key': uniKey});
    let qrUrl = qrUrlRes.data.qrurl;
    console.log(qrUrl);
    return qrUrl;
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setShowLogin: (state, {payload}) => {
            state.isShowLogin = payload.isShowLogin;
        },
        setQrUrl: (state, {payload}) => {
            state.qrUrl = payload.qrUrl;
        },
    },
});

export const {setShowLogin, setQrUrl} = loginSlice.actions;

export default loginSlice.reducer;