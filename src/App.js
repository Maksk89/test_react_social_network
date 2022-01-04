import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Layout from './components/Layout/Layout';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Layout />}>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route index element = {<Profile state = {props.state.profilePage}
                                                     addPost = {props.addPost}
                                                     updateNewPostText = {props.updateNewPostText} />} />
                    <Route path = "dialogs"
                           element = {<Dialogs
                               state = {props.state.dialogsPage} />} />
                    <Route path = "profile"
                           element = {<Profile
                               state = {props.state.profilePage}
                               addPost = {props.addPost}
                               updateNewPostText = {props.updateNewPostText} />} />
                    <Route path = "news" element = {<News />} />
                    <Route path = "music" element = {<Music />} />
                    <Route path = "settings" element = {<Settings />} />
                </Route>
            </Routes>
        </div>
    );
}


export default App;
