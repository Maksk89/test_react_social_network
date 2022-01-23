import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from './components/Layout/Layout';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileContainerFunctional from './components/Profile/ProfileContainerFunctional';
// import {
//     ProfileContainerFunctional as ProfileContainer
// } from './components/Profile/ProfileContainerFunctional';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Layout />}>
                    <Route index element = {<ProfileContainerFunctional />} />
                    <Route path = 'dialogs'
                           element = {<DialogsContainer />} />
                    <Route path = 'profile/' element = {<ProfileContainerFunctional />}>
                        <Route path = ':userId' element = {<ProfileContainerFunctional />} />
                    </Route>
                    <Route path = 'news' element = {<News />} />
                    <Route path = 'music' element = {<Music />} />
                    <Route path = 'settings' element = {<Settings />} />
                    <Route path = 'users' element = {<UsersContainer />} />
                </Route>
            </Routes>
        </div>
    );
};


export default App;
