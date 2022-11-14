import "./SearchContent.css"

import {RightOutlined} from "@ant-design/icons";
import IconSingle from "../../assets/img/icon_single.png";
import IconUser from "../../assets/img/icon_user.png";
import IconAlbum from "../../assets/img/icon_album.png";
import AppDivider from "../AppDivider";
import {useSelector} from 'react-redux';

function SearchContent() {

    const {searchKey, songs, artists, albums} = useSelector((store) => store.header)

    const artistItems = artists.map((item) => {
            const artist = artists[0].name
            return <li key={item.toString()} className="search-li">{artist}</li>;
        }
    );

    const songsItems = songs.map((item) => {
            const name = item.name;
            let artist = "";
            item.artists.forEach((item) => {
                artist = artist + " " + item.name;
            });

            const itemName = name + "-" + artist;
            return <li key={item.toString()} className="search-li">{itemName}</li>;
        }
    );

    const albumItems = albums.map((item) => {
            const name = item.name;
            const artist = item.artist.name;
            const itemName = name + "-" + artist;
            return <li key={item.toString()} className="search-li">{itemName}</li>;
        }
    );


    return (
        <div className="search-content-container">
            <div className="search-header-container">
                <span className="search-header-key"> 搜"{searchKey}"相关用户</span>
                <RightOutlined/>
            </div>
            <AppDivider/>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconSingle} alt='' className="search-item-title-image"/>
                    <span>单曲</span>
                </div>
                <div className="search-item-info">
                    <ul className="search-ul">
                        {songsItems}
                    </ul>
                </div>
            </div>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconUser} alt='' className="search-item-title-image"/>
                    <span>歌手</span>
                </div>
                <div className="search-item-info-f7">
                    <ul className="search-ul">
                        {artistItems}
                    </ul>
                </div>
            </div>
            <div className="search-item-container">
                <div className="search-item-title">
                    <img src={IconAlbum} alt='' className="search-item-title-image"/>
                    <span>专辑</span>
                </div>
                <div className="search-item-info">
                    <ul className="search-ul">
                        {albumItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchContent

