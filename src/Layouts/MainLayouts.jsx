import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const MainLayouts = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;