import * as React from "react";
import './style/App.css';
import {Route, Routes} from "react-router-dom";
import FindMusicPage from "./pages/find";
import MyMusicPage from "./pages/my";
import FollowPage from "./pages/follow";
import MallPage from "./pages/mall";
import MusicianPage from "./pages/musician";
import DownloadPage from "./pages/download";
import NotFoundPage from "./pages/404";
import AppHeader from "./components/app-header/AppHeader";

export default function App() {
    return (
        <div className="App">
            <AppHeader/>
            <Routes>
                <Route path="/" element={<FindMusicPage/>}/>
                <Route path="/myMusic" element={<MyMusicPage/>}/>
                <Route path="/follow" element={<FollowPage/>}/>
                <Route path="/mall" element={<MallPage/>}/>
                <Route path="/musician" element={<MusicianPage/>}/>
                <Route path="/download" element={<DownloadPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
}
