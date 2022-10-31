import "./SearchContent.css"

import {RightOutlined} from "@ant-design/icons";
import IconSingle from "../../assets/img/icon_single.png";
import AppDivider from "../AppDivider";

function SearchContent() {

    //单曲
    const singles = [
        '我-把灯墩柱',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    //歌手
    const singer = "Beyond"

    //专辑
    const album = [
        '把回忆拼好给你',
        'Beyond 25th Au',
    ];

    //歌单
    const playList = [
        '美国Billboard榜',
        'R&B Type Beats/说唱伴奏',
    ];

    const singleItems = singles.map((myList) =>
        <li>{myList}</li>
    );

    return (
        <div className="search-content-container">
            <div className="search-header-container">
                <span> 搜"b"相关用户</span>
                <RightOutlined/>
            </div>
            <AppDivider/>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconSingle} alt='' width={15}/>
                    <span>单曲</span>
                </div>
                <div className="search-item-info">
                    <ul>
                        {singleItems}
                    </ul>
                </div>
            </div>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconSingle} alt='' width={15}/>
                    <span>歌手</span>
                </div>
                <div className="search-item-info" style={{backgroundColor: "#f7f7f7"}}>
                    <span>{singer}</span>
                </div>
            </div>
            {/*<div className="single-container">*/}
            {/*    <div className="single-title">*/}
            {/*        <img src={IconSingle} alt='' width={15}/>*/}
            {/*        <span>专辑</span>*/}
            {/*    </div>*/}
            {/*    <div className="single-content">*/}
            {/*        <ul>*/}
            {/*            {album}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="single-container">*/}
            {/*    <div className="single-title">*/}
            {/*        <img src={IconSingle} alt='' width={15}/>*/}
            {/*        <span>歌单</span>*/}
            {/*    </div>*/}
            {/*    <div className="single-content">*/}
            {/*        <ul>*/}
            {/*            {playList}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default SearchContent

