import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./SearchInput.css"

// 引入相关的hooks
import {useSelector, useDispatch} from 'react-redux';
// 引入对应的方法
import {increment, decrement} from '../../store/festures/counterSlice';

function SearchInput() {

    // 通过useSelector直接拿到store中定义的value
    const {value} = useSelector((store) => store.counter)
    // 通过useDispatch 派发事件
    const dispatch = useDispatch()

    const onChange = (e) => {
        console.log('Change:', e.target.value);
        if (value === 10) {
            dispatch(decrement());
        } else {
            dispatch(increment());
        }
        console.log(value)
    };

    return (
        <Input
            className="search-input"
            placeholder="音乐/视频/电台/用户"
            size="large"
            prefix={<SearchOutlined/>}
            onChange={onChange}
        />
    )
}

export default SearchInput

