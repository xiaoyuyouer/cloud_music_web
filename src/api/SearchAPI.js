import request from "./net";

export function searchSuggest(params) {
    return request({
        url: 'search/suggest',
        method: 'get',
        params: params
    })
}