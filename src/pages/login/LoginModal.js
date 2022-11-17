import "./LoginModal.css"
import {CloseOutlined} from "@ant-design/icons";
import {getQrCode, setQrUrl, setShowLogin} from "./slice/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Image} from "antd";
import ImgScan from "../../assets/img/img_scan.png";
import MSizeBox from "../../components/MSizeBox";
import {QRCodeSVG} from 'qrcode.react';

function LoginModal() {

    const dispatch = useDispatch()
    const {qrUrl} = useSelector((store) => store.login)

    useEffect(() => {
        console.log('LoginModal mounted');
    }, []);

    const clickClose = () => {
        dispatch(setShowLogin({isShowLogin: false}))
    };

    const clickLoginOther = () => {
        console.log("clickLoginOther")
        getQrCode().then(r => {
            dispatch(setQrUrl({qrUrl: r}));
        });
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
                    <QRCodeSVG value={qrUrl} size={128}/>
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