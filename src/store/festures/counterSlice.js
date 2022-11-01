import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 100,
    user: {
        name: "yzs",
        job: "全栈",
    },
};
export const counterSlice = createSlice({
    // 命名空间，在调用action的时候会默认的设置为action的前缀,保证唯一.不重名
    name: "counterSpace",
    initialState,
    reducers: {
        // reducer函数 state当前组件的数据
        //第二个参数为{payload:{},type:"""} 想想就写法或者vuex
        increment(state) {
            state.counter += 100;
        },
        decrement(state, actions) {
            // actions == {payload:{},type:"""}
            console.log("decrement---actions", actions);
            state.counter -= actions.payload;
        },
        updateUser(state, {payload}) {
            console.log("updateUser-------payload", payload);
            // 引用类型 注意 赋值的写法
            state.user = {
                ...state.user,
                ...payload,
            };
        },
    },
});

export const {increment, decrement, updateUser} = counterSlice.actions;

export default counterSlice.reducer;