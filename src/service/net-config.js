const devBaseURL = "https://cloud-music-api-plum.vercel.app/";
const proBaseURL = "https://cloud-music-api-plum.vercel.app/";
export const BASE_URL =
    process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL

//请求超时时长
export const TIMEOUT = 10000

//搜索建议
export const API_SEARCH_SUGGEST = "/search/suggest"

//二维码 key 生成
export const API_QR_KEY = "/login/qr/key"

//二维码生成
export const API_QR_CREATE = "/login/qr/create"

//二维码检测扫码状态
export const API_QR_CHECK = "/login/qr/check"
