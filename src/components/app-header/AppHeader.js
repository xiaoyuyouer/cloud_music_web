import "./AppHeader.css"
import {NavLink} from "react-router-dom";
import {get} from "../../service/net";
import {API_SEARCH_SUGGEST} from "../../service/net-config";
import SearchInput from "../app-search/SearchInput";
import SearchContent from "../app-search/SearchContent";
import {useSelector} from 'react-redux';


function AppHeader() {

    const headerLinks = [
        {
            title: '发现音乐',
            link: '/discover',
        },
        {
            title: '我的音乐',
            link: '/mine',
        },
        {
            title: '关注',
            link: '/friend',
        },
        {
            title: '商城',
            link: '/mall',
        },
        {
            title: '音乐人',
            link: '/musician',
        },
        {
            title: '下载客户端',
            link: '/download',
        },
    ]

    const {isShowDialog} = useSelector((store) => store.header)

    const login = () => {
        console.log('点击登录')
        get(API_SEARCH_SUGGEST, {'keywords': 'eEE'}).then(r => {
            console.log('走到了success')
            console.log(r)
        }, e => {
            console.log('走到了error')
            console.log(e)
        })

        get(API_SEARCH_SUGGEST).then(r => {
            console.log('走到了success')
            console.log(r)
        }).catch(e => {
            console.log('走到了error')
            console.log(e)
        })
    };


    const headerItemView = (item, index) => {
        return (
            <NavLink
                key={item.title}
                to={item.link}
                className={({isActive}) => isActive ? "app-header-item-active" : "app-header-item"}
                children={({isActive}) => {
                    const className = isActive ? "app-header-item-icon" : "";
                    return (
                        <>
                            <em>{item.title}</em>
                            <i className={className}></i>
                        </>
                    );
                }}
            >

            </NavLink>
        );
    };

    return (
        <div className="app-header-container">
            <div>
                <a href="/" className="app-header-logo"> </a>
            </div>
            <div className="app-header-group">
                {headerLinks.map((item, index) => {
                    return headerItemView(item, index);
                })}
            </div>
            <div className="app-header-search-container">
                <SearchInput/>
                <div className="app-header-search-content-container"
                     style={{display: isShowDialog ? 'block' : 'none'}}>
                    <SearchContent/>
                </div>
            </div>
            <div className="app-header-creator">创作者中心</div>
            <div className="app-header-login"
                 onClick={() => login()}>登录
            </div>
        </div>
    )
}

export default AppHeader
