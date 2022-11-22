import "./LoginModal.css"
import {CloseOutlined} from "@ant-design/icons";
import {setShowLogin} from "../slice/loginSlice";
import {useDispatch} from "react-redux";
import MSizeBox from "../../../components/MSizeBox";
import QrLogin from "./QrLogin";

function LoginModal() {

    const dispatch = useDispatch()


    const clickClose = () => {
        console.log("点击关闭登录弹窗")
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
            <MSizeBox height={30}/>
            <QrLogin/>
            <MSizeBox height={25}/>
        </div>
    )
}

export default LoginModal