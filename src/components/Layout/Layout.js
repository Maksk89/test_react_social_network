import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import NavBar from '../Navbar/NavBar';
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className = 'app-wrapper__content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
