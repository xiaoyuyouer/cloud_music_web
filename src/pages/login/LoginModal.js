import "./LoginModal.css"
import {CloseOutlined} from "@ant-design/icons";
import {getQrKey, setShowLogin} from "./slice/loginSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Image} from "antd";
import ImgScan from "../../assets/img/img_scan.png";
import ImgQrcode from "../../assets/img/img_qrcode.png";
import MSizeBox from "../../components/MSizeBox";

function LoginModal() {

    const dispatch = useDispatch()

    const clickClose = () => {
        dispatch(setShowLogin({isShowLogin: false}))
    };

    const clickLoginOther = () => {
        console.log("clickLoginOther")
        dispatch(getQrKey())
    };

    useEffect(() => {
        console.log('LoginModal mounted');
    }, []);


    return (
        <div className="login-modal-container">
            <div className="login-modal-header">
                <span>登录</span>
                <div className="login-modal-header-close" onClick={() => clickClose()}>
                    <CloseOutlined style={{color: "#888888"}}/>
                </div>
            </div>
            <MSizeBox height={30}/>
            <div className="login-modal-content">
                <Image
                    width={125}
                    height={220}
                    src={ImgScan}
                    preview={false}
                />
                <MSizeBox width={50}/>
                <div className="login-modal-content-right">
                    <span style={{fontSize: 18, fontWeight: "bold", color: "#333333"}}>扫码登录</span>
                    <Image
                        width={128}
                        height={128}
                        src={ImgQrcode}
                        preview={false}
                    />
                    <div>
                        <span style={{fontSize: 12, color: "#999999"}}>使用</span>
                        <span className="login-modal-content-jump-app"
                              style={{fontSize: 12, color: "#0c73c2", marginRight: 2, marginLeft: 2}}>网易云音乐App</span>
                        <span style={{fontSize: 12, color: "#999999"}}>扫码登录</span>
                    </div>

                </div>
            </div>
            <MSizeBox height={25}/>
            <div className="login-modal-footer">
                <span className="login-modal-footer-other" onClick={() => clickLoginOther()}>选择其他登录模式</span>
            </div>
        </div>
    )
}

export default LoginModal