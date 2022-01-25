import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Navbar/NavBar';
import './Layout.css';
import HeaderContainer from '../Navbar/HeaderContainer';

const Layout = () => {
    return (
        <div className = 'app-wrapper'>
            <HeaderContainer />
            <NavBar />
            <div className = 'app-wrapper__content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
