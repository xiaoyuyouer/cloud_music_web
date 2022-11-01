import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    title: "redux toolkit pre",
};

export const counterSlice = createSlice({
    // 命名空间，在调用action的时候会默认的设置为action的前缀,保证唯一.不重名
    name: "counter",
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        // 定义一个加的方法
        increment: (state) => {
            state.value += 1;
        },
        // 定义一个减的方法
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;