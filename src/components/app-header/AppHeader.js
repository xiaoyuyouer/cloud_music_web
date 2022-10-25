import "./AppHeader.css"
import {NavLink} from "react-router-dom";


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
            title: '朋友',
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

    const showSelectItem = (item, index) => {
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
        <div className="app-header-main">
            <div className="app-header-logo"/>
            <div className="app-header-group">
                {headerLinks.map((item, index) => {
                    return showSelectItem(item, index);
                })}
            </div>
        </div>
    )
}

export default AppHeader
