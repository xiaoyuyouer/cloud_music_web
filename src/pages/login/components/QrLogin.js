import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clear, getQrInfo, loopQrCheck, setLoading, setQrInfo, setQrStatus, stopLoopQrCheck} from "../slice/loginSlice";
import {Image, Spin} from "antd";
import ImgScan from "../../../assets/img/img_scan.png";
import MSizeBox from "../../../components/MSizeBox";
import {QRCodeSVG} from "qrcode.react";
import ImgScanSuccess from "../../../assets/img/img_scan_success.png";
import "./QrLogin.css"

function QrLogin() {

    const dispatch = useDispatch()
    const {isShowLogin, isLoading, qrUrl, qrStatus} = useSelector((store) => store.login)

    //监听登录弹窗打开状态，打开之后请求二维码信息，关闭之后清除定时任务
    useEffect(() => {
        console.log('LoginModal isShowLogin：' + isShowLogin);
        if (isShowLogin) {
            updateQrCode();
        } else {
            stopLoopQrCheck();
            dispatch(clear());
        }
        // eslint-disable-next-line
    }, [isShowLogin]);

    const clickRefresh = () => {
        console.log("点击刷新")
        updateQrCode();
    };

    const clickLoginOther = () => {
        console.log("点击其他方式登录")
    };


    //请求网络，更新二维码
    function updateQrCode() {
        stopLoopQrCheck();
        dispatch(setQrStatus({qrStatus: 1}));
        dispatch(setLoading({isLoading: true}));
        getQrInfo().then(r => {
            console.log(r);
            dispatch(setLoading({isLoading: false}));
            dispatch(setQrInfo({qrKey: r.qrKey, qrUrl: r.qrUrl}));
            loopQrCheck(r.qrKey, (r) => {
                console.log(r);
                dispatch(setQrStatus({qrStatus: r.qrStatus, cookie: r.cookie}));
            })
        }).catch(e => {
            dispatch(setLoading({isLoading: false}));
        });
    }


    const loginContentWidget = () => {

        if (qrStatus === 0) {
            //二维码过期
            return expiredWidget();
        }
        if (qrStatus === 1) {
            //等待扫码
            return waitScanWidget();
        }
        if ((qrStatus === 2)) {
            //待确认
            return confirmWidget();
        }
    }

    const expiredWidget = () => {
        return (
            <div className="qr-login-modal-content">
                <Image
                    width={125}
                    height={220}
                    src={ImgScan}
                    preview={false}
                />
                <MSizeBox width={50}/>
                <div className="qr-login-modal-content-right">
                    <span style={{fontSize: 18, fontWeight: "bold", color: "#333333"}}>扫码登录</span>
                    <div className="qr-login-modal-content-expired">
                        <div style={{position: "absolute"}}>
                            <QRCodeSVG value={qrUrl} size={128}/>
                        </div>
                        <div className="qr-login-modal-content-expired-top">
                            <span style={{fontSize: 12, color: "black", fontWeight: "bold"}}>二维码已失效</span>
                            <MSizeBox height={5}/>
                            <div className="qr-login-modal-content-expired-top-button"
                                 onClick={() => clickRefresh()}>点击刷新
                            </div>
                        </div>
                    </div>

                    <div>
                        <span style={{fontSize: 12, color: "#999999"}}>使用</span>
                        <span className="qr-login-modal-content-jump-app"
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


    const waitScanWidget = () => {
        return (
            <div className="qr-login-modal-content">
                <Image
                    width={125}
                    height={220}
                    src={ImgScan}
                    preview={false}
                />
                <MSizeBox width={50}/>
                <div className="qr-login-modal-content-right">
                    <span style={{fontSize: 18, fontWeight: "bold", color: "#333333"}}>扫码登录</span>
                    <Spin spinning={isLoading}>
                        <QRCodeSVG value={qrUrl} size={128}/>
                    </Spin>
                    <div>
                        <span style={{fontSize: 12, color: "#999999"}}>使用</span>
                        <span className="qr-login-modal-content-jump-app"
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
            <div className="qr-login-modal-content-confirm">
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
        <div>
            {loginContentWidget()}
            <MSizeBox height={25}/>
            <div className="qr-login-modal-footer">
                <span className="qr-login-modal-footer-other" onClick={() => clickLoginOther()}>选择其他登录模式</span>
            </div>
        </div>
    )

}

export default QrLogin