import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./SearchInput.css"

function SearchInput() {

    const onChange = (e) => {
        console.log('Change:', e.target.value);
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

