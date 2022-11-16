import "./SearchContent.css"

import {RightOutlined} from "@ant-design/icons";
import IconSingle from "../../assets/img/icon_single.png";
import IconUser from "../../assets/img/icon_user.png";
import IconAlbum from "../../assets/img/icon_album.png";
import MDivider from "../MDivider";
import {useSelector} from 'react-redux';
import {warpTag} from "../../utils/utils";
import {Spin, Empty} from 'antd';

function SearchContent() {

    const {searchKey, isSearching, isEmpty, songs, artists, albums} = useSelector((store) => store.header)

    //单曲
    const songsItems = songs.map((item, index) => {
            const name = item.name;
            let artist = "";
            item.artists.forEach((item) => {
                artist = artist + " " + item.name;
            });

            const itemName = name + "-" + artist;
            return <li key={index} className="search-li">
                <span dangerouslySetInnerHTML={{__html: warpTag(itemName, searchKey, "span")}}></span>
            </li>;
        }
    );

    //歌手
    const artistItems = artists.map((item, index) => {
            const artist = artists[0].name
            return <li key={index} className="search-li">
                <span dangerouslySetInnerHTML={{__html: warpTag(artist, searchKey, "span")}}></span>
            </li>;
        }
    );

    //专辑
    const albumItems = albums.map((item, index) => {
            const name = item.name;
            const artist = item.artist.name;
            const itemName = name + "-" + artist;
            return <li key={index} className="search-li">
                <span dangerouslySetInnerHTML={{__html: warpTag(itemName, searchKey, "span")}}></span>
            </li>;
        }
    );

    const songsWidget = () => {
        if (songs.length === 0) {
            return <div/>;
        }
        return (
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
        );
    }

    const artistWidget = () => {
        if (artists.length === 0) {
            return <div/>;
        }
        return (
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
        )
    }

    const albumWidget = () => {
        if (albums.length === 0) {
            return <div/>;
        }
        return (
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
        )
    }

    const contentWidget = () => {
        if (isEmpty) {
            return (
              <div className="search-content-empty">
                  <Empty/>
              </div>
            )
        }
        return (
            <div className="search-content-table">
                {songsWidget()}
                {artistWidget()}
                {albumWidget()}
            </div>
        );
    }

    return (
        <div className="search-content-container">
            <div className="search-header-container">
                <span className="search-header-key"> 搜"{searchKey}"相关用户</span>
                <RightOutlined/>
            </div>
            <MDivider/>
            <Spin spinning={isSearching}>
                {contentWidget()}
            </Spin>
        </div>
    );
}

export default SearchContent

