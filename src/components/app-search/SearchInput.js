import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./SearchInput.css"

// 引入相关的hooks
import {useDispatch} from 'react-redux';
// 引入对应的方法
import {showDialog} from '../../store/festures/headerSlice';

function SearchInput() {

    const dispatch = useDispatch()

    const onChange = (e) => {
        console.log('Change:', e.target.value);
        let char = e.target.value;
        if (char.length > 0) {
            dispatch(showDialog({isShowDialog: true}));
        } else {
            dispatch(showDialog({isShowDialog: false}));
        }
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

