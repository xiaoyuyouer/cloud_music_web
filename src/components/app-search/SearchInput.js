import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./SearchInput.css"

function SearchInput() {
    return (
        <Input
            className="search-input"
            placeholder="音乐/视频/电台/用户"
            size="large"
            prefix={<SearchOutlined/>}
        />
    )
}

export default SearchInput

