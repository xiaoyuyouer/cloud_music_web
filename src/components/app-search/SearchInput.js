import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./SearchInput.css"

// 引入相关的hooks
import {useDispatch,} from 'react-redux';
// 引入对应的方法
import {searchSuggest, setSearchKey, setShowSearch, clearData} from '../../store/festures/headerSlice';

function SearchInput() {

    const dispatch = useDispatch()

    const onChange = (e) => {
        let key = e.target.value;
        dispatch(setSearchKey({searchKey: key}));
        if (key.length > 0) {
            dispatch(setShowSearch({isShowSearch: true}));
            dispatch(searchSuggest(key));
        } else {
            dispatch(setShowSearch({isShowSearch: false}));
            dispatch(clearData());
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

