import {NavLink} from "react-router-dom";
import "./AppHeader.css"

function AppHeader() {
    return (
        <div className="app-header-main">
            <div className="app-header-logo"></div>
            <NavLink to={"/"}>发现音乐 </NavLink>
            <NavLink to={"/myMusic"}>我的音乐 </NavLink>
            <NavLink to={"/follow"}>关注 </NavLink>
            <NavLink to={"/mall"}>商城 </NavLink>
            <NavLink to={"/musician"}>音乐人 </NavLink>
            <NavLink to={"/download"}>下载客户端 </NavLink>
        </div>
    )
}

export default AppHeader