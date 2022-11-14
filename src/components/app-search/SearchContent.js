import "./SearchContent.css"

import {RightOutlined} from "@ant-design/icons";
import IconSingle from "../../assets/img/icon_single.png";
import IconUser from "../../assets/img/icon_user.png";
import IconAlbum from "../../assets/img/icon_album.png";
import AppDivider from "../AppDivider";
import {useSelector} from 'react-redux';

function SearchContent() {

    const {searchKey, songs, artists, albums} = useSelector((store) => store.header)

    const artistItems = artists.map((item, index) => {
            const artist = artists[0].name
            return <li key={index} className="search-li">
                <span dangerouslySetInnerHTML={{__html: warpTag(artist, searchKey, "span")}}></span>
            </li>;
        }
    );

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

    const albumItems = albums.map((item, index) => {
            const name = item.name;
            const artist = item.artist.name;
            const itemName = name + "-" + artist;
            return <li key={index} className="search-li">
                <span dangerouslySetInnerHTML={{__html: warpTag(itemName, searchKey, "span")}}></span>
            </li>;
        }
    );


    /**
     * 关键字变色
     * @params content 内容
     * @params keyword 关键词
     * @params tagName 标签名
     */
    function warpTag(content, keyword, tagName) {
        if (content === "No results") {
            return content
        }
        const a = content.toLowerCase()
        const b = keyword.toLowerCase()

        const indexOf = a.indexOf(b)
        const c = indexOf > -1 ? content.substr(indexOf, keyword.length) : ''
        const val = `<${tagName} style="color:#0c73c2;">${c}</${tagName}>`
        const regS = new RegExp(keyword, 'gi')
        return content.replace(regS, val)
    }

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

