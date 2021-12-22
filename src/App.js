import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
    return (
        <div className = 'app-wrapper'>
            <Header />
            <NavBar />
            {/*<Profile />*/}
            < Dialogs />
        </div>
    );
}


export default App;
