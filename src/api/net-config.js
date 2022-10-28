const devBaseURL = "https://cloud-music-api-plum.vercel.app/";
const proBaseURL = "https://cloud-music-api-plum.vercel.app/";
export const BASE_URL =
    process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL

export const TIMEOUT = 10000

//搜索建议
export const API_SEARCH_SUGGEST = "search/suggest"
