import {createSlice} from "@reduxjs/toolkit";
import {post} from "../../../service/net";
import {API_QR_CHECK, API_QR_CREATE, API_QR_KEY} from "../../../service/net-config";
import {isNull} from "../../../utils/common-utils";
import StorageUtils from "../../../utils/storage-utils";


const initialState = {
    //是否展示登录弹窗
    isShowLogin: false,
    //是否正在请求网络
    isLoading: true,
    //二维码key
    qrKey: "",
    //二维码url
    qrUrl: "",
    //扫码状态，0二维码过期，1等待扫码，2待确认，3授权登录成功
    qrStatus: 0,
    //登录成功cookie
    cookie: "",
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

let looper;

export function stopLoopQrCheck() {
    if (!isNull(looper)) {
        console.log('清除定时器');
        clearInterval(looper);
        looper = null;
    }
}

export function loopQrCheck(key, callback) {
    console.log('开启定时器');
    let qrStatus = 0;
    looper = setInterval(
        () => {
            post(API_QR_CHECK, {'key': key}).then(r => {
                qrStatus = 0;
                switch (r.code) {
                    case 800:
                        qrStatus = 0;
                        clearInterval(looper);
                        break;
                    case 801:
                        qrStatus = 1;
                        break;
                    case 802:
                        qrStatus = 2;
                        break;
                    case 803:
                        qrStatus = 3;
                        clearInterval(looper);
                        StorageUtils.saveCookie(r.cookie);
                        break;
                    default:
                        break;
                }
                callback({qrStatus: qrStatus, cookie: r.cookie});
            }).catch(e => {
                clearInterval(looper);
            });
        },
        3000);
}


export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setShowLogin: (state, {payload}) => {
            state.isShowLogin = payload.isShowLogin;
        },
        setLoading: (state, {payload}) => {
            state.isLoading = payload.isLoading;
        },
        setQrInfo: (state, {payload}) => {
            state.qrKey = payload.qrKey;
            state.qrUrl = payload.qrUrl;
        },
        setQrStatus: (state, {payload}) => {
            state.qrStatus = payload.qrStatus;
            state.cookie = payload.cookie;
            if (state.qrStatus === 3) {
                //授权登录成功
                state.isShowLogin = false;
            }
        },
        clear: (state, {payload}) => {
            state.qrKey = "";
            state.qrUrl = "";
        },
    },
});

export const {setShowLogin, setLoading, setQrInfo, setQrStatus, clear} = loginSlice.actions;

export default loginSlice.reducer;