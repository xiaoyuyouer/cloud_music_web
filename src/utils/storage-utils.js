import store from 'store'
import {isNull} from "./common-utils";

export const COOKIE_STORAGE = "cookie_storage"
export const USER_STORAGE = "user_storage"


const StorageUtils = {
    saveCookie(cookie) {
        console.log("saveCookie: " + cookie);
        if (isNull(cookie)) {
            return;
        }
        store.set(COOKIE_STORAGE, cookie);
    },

    getCookie() {
        return store.get(COOKIE_STORAGE) || "";
    },

    removeCookie() {
        store.remove(COOKIE_STORAGE);
    }
}

export default StorageUtils;