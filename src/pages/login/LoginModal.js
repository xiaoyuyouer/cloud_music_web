import "./LoginModal.css"
import {CloseOutlined} from "@ant-design/icons";
import {clear, getQrInfo, loopQrCheck, setQrInfo, setQrStatus, setShowLogin, stopLoopQrCheck} from "./slice/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Image} from "antd";
import ImgScan from "../../assets/img/img_scan.png";
import ImgScanSuccess from "../../assets/img/img_scan_success.png";
import MSizeBox from "../../components/MSizeBox";
import {QRCodeSVG} from 'qrcode.react';

function LoginModal() {

    const dispatch = useDispatch()
    const {isShowLogin, qrUrl, qrStatus} = useSelector((store) => store.login)

    //监听登录弹窗打开状态，打开之后请求二维码信息，关闭之后清除定时任务
    useEffect(() => {
        console.log('LoginModal isShowLogin：' + isShowLogin);
        if (isShowLogin) {
            getQrInfo().then(r => {
                console.log(r);
                dispatch(setQrInfo({qrKey: r.qrKey, qrUrl: r.qrUrl}));
                loopQrCheck(r.qrKey, (r) => {
                    console.log(r);
                    dispatch(setQrStatus({qrStatus: r.qrStatus, cookie: r.cookie}));
                })
            });
        } else {
            stopLoopQrCheck();
            dispatch(clear());
        }
        // eslint-disable-next-line
    }, [isShowLogin]);

    const clickClose = () => {
        dispatch(setShowLogin({isShowLogin: false}))
    };

    const clickLoginOther = () => {

    };


    const loginContentWidget = () => {
        if (qrStatus === 0) {
            //二维码过期
        }
        if (qrStatus === 1) {
            //1等待扫码
            return waitScanWidget();
        }
        if ((qrStatus === 2)) {
            //2待确认
            return confirmWidget();
        }
        if (qrStatus === 3) {
            //授权登录成功
        }
    }

    const waitScanWidget = () => {
        return (
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
                              style={{
                                  fontSize: 12,
                                  color: "#0c73c2",
                                  marginRight: 2,
                                  marginLeft: 2
                              }}>网易云音乐App</span>
                        <span style={{fontSize: 12, color: "#999999"}}>扫码登录</span>
                    </div>

                </div>
            </div>
        )
    }

    const confirmWidget = () => {
        return (
            <div className="login-modal-content-confirm">
                <MSizeBox height={5}/>
                <Image
                    width={140}
                    height={140}
                    src={ImgScanSuccess}
                    preview={false}
                />
                <MSizeBox height={15}/>
                <span style={{fontSize: 18, color: "black", fontWeight: "bold"}}>扫描成功</span>
                <MSizeBox height={2}/>
                <span style={{fontSize: 14, color: "#333333"}}>请在手机上确认登录</span>
            </div>
        )
    }


    return (
        <div className="login-modal-container">
            <div className="login-modal-header">
                <span>登录</span>
                <div className="login-modal-header-close" onClick={() => clickClose()}>
                    <CloseOutlined style={{color: "#888888"}}/>
                </div>
            </div>
            <MSizeBox height={30}/>
            {loginContentWidget()}
            <MSizeBox height={25}/>
            <div className="login-modal-footer">
                <span className="login-modal-footer-other" onClick={() => clickLoginOther()}>选择其他登录模式</span>
            </div>
        </div>
    )
}

export default LoginModal