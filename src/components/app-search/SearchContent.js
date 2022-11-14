import "./SearchContent.css"

import {RightOutlined} from "@ant-design/icons";
import IconSingle from "../../assets/img/icon_single.png";
import IconUser from "../../assets/img/icon_user.png";
import IconAlbum from "../../assets/img/icon_album.png";
import AppDivider from "../AppDivider";
import {useSelector} from 'react-redux';

function SearchContent() {

    const {searchKey, songs, artists, albums} = useSelector((store) => store.header)

    const artist = artists[0].name

    const songsItems = songs.map((item) =>
        <li key={item.toString()} className="search-li">{item.name}</li>
    );

    const albumItems = albums.map((item) =>
        <li key={item.toString()} className="search-li">{item.name}</li>
    );


    return (
        <div className="search-content-container">
            <div className="search-header-container">
                <span> 搜"{searchKey}"相关用户</span>
                <RightOutlined/>
            </div>
            <AppDivider/>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconSingle} alt='' width={15} style={{marginRight: 2}}/>
                    <span>单曲</span>
                </div>
                <div className="search-item-info">
                    <ul>
                        {songsItems}
                    </ul>
                </div>
            </div>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconUser} alt='' width={15} style={{marginRight: 2}}/>
                    <span>歌手</span>
                </div>
                <div className="search-item-info" style={{backgroundColor: "#f7f7f7"}}>
                    <span>{artist}</span>
                </div>
            </div>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconAlbum} alt='' width={15} style={{marginRight: 2}}/>
                    <span>专辑</span>
                </div>
                <div className="search-item-info">
                    <ul>
                        {albumItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchContent

