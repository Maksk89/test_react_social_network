import './App.css';
import { Routes, Route } from "react-router-dom";
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
                    <Route index element = {<Profile state = {props.appState.profilePage} />} />
                    <Route path = "dialogs"
                           element = {<Dialogs
                               state = {props.appState.dialogsPage} />} />
                    <Route path = "profile"
                           element = {<Profile
                               state = {props.appState.profilePage} addPost = {props.addPost} />} />
                    <Route path = "news" element = {<News />} />
                    <Route path = "music" element = {<Music />} />
                    <Route path = "settings" element = {<Settings />} />
                </Route>
            </Routes>
        </div>
    );
}


export default App;
