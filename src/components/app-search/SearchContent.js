import "./SearchContent.css"

import {RightOutlined} from "@ant-design/icons";
import IconSingle from "../../assets/img/icon_single.png";

function SearchContent() {

    const data = [
        '我-把灯墩柱',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    const singleItems = data.map((myList) =>
        <li>{myList}</li>
    );

    return (
        <div className="search-content">
            <div className="search-title">
                搜"b"相关用户
                <RightOutlined/>
            </div>
            <div style={{height: 1, backgroundColor: "#ccc"}}/>
            <div className="single-container">
                <div className="single-title">
                    <img src={IconSingle} alt='' width={15}/>
                    <span>单曲</span>
                </div>
                <div className="single-content">
                    <ul>
                        {singleItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchContent

