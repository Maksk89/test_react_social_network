import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Layout />}>
                    <Route index element = {<Profile />} />
                    <Route path = "dialogs" element = {<Dialogs />} />
                    <Route path = "profile" element = {<Profile />} />


                </Route>
            </Routes>
        </div>
    );
}


export default App;
