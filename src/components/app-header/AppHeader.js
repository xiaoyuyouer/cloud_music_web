import "./AppHeader.css"
import {NavLink} from "react-router-dom";
import SearchInput from "../app-search/SearchInput";
import SearchContent from "../app-search/SearchContent";
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from "antd";
import LoginModal from "../../pages/login/LoginModal";
import {setShowLogin} from "../../pages/login/slice/loginSlice";


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


    const dispatch = useDispatch()
    const {isShowSearch} = useSelector((store) => store.header)
    const {isShowLogin} = useSelector((store) => store.login)


    const clickLogin = () => {
        dispatch(setShowLogin({isShowLogin: true}))
    };

    const closeLoginModal = () => {
        dispatch(setShowLogin({isShowLogin: false}))
    }


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
                     style={{display: isShowSearch ? 'block' : 'none'}}>
                    <SearchContent/>
                </div>
            </div>
            <div className="app-header-creator">创作者中心</div>
            <div className="app-header-login"
                 onClick={() => clickLogin()}>登录
            </div>
            <Modal
                open={isShowLogin}
                footer={null}
                onCancel={closeLoginModal}
                centered
                closable={false}
                bodyStyle={{
                    padding: "0",
                }}
            >
                <LoginModal/>
            </Modal>
        </div>
    )
}

export default AppHeader
