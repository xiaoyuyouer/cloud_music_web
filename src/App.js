import * as React from "react";
import "./style/App.css";
import {Route, Routes, Navigate} from "react-router-dom";
import DiscoverPage from "./pages/discover";
import MinePage from "./pages/mine";
import FriendPage from "./pages/friend";
import MallPage from "./pages/mall";
import MusicianPage from "./pages/musician";
import DownloadPage from "./pages/download";
import NotFoundPage from "./pages/404";
import AppHeader from "./components/app-header/AppHeader";

export default function App() {
    return (
        <div className="app">
            <AppHeader/>
            <Routes>
                <Route path="/" element={<Navigate to="/discover" />}/>
                <Route path="/discover" element={<DiscoverPage/>}/>
                <Route path="/mine" element={<MinePage/>}/>
                <Route path="/friend" element={<FriendPage/>}/>
                <Route path="/mall" element={<MallPage/>}/>
                <Route path="/musician" element={<MusicianPage/>}/>
                <Route path="/download" element={<DownloadPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
}
