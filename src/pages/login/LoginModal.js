import "./LoginModal.css"
import {CloseOutlined} from "@ant-design/icons";
import {setShowLogin} from "./slice/loginSlice";
import {useDispatch} from "react-redux";

function LoginModal() {

    const dispatch = useDispatch()

    const clickClose = () => {
        dispatch(setShowLogin({isShowLogin: false}))
    };

    return (
        <div className="login-modal-container">
            <div className="login-modal-header">
                <span>登录</span>
                <div className="login-modal-header-close" onClick={() => clickClose()}>
                    <CloseOutlined style={{color: "#888888"}}/>
                </div>
            </div>
        </div>
    )
}

export default LoginModal