import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Layout />}>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route index element = {<Profile />} />
                    <Route path = 'dialogs'
                           element = {<DialogsContainer />} />
                    <Route path = 'profile'
                           element = {<Profile />} />
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
