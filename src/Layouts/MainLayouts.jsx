import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Banner from '../Pages/Home/Banner/Banner';

const MainLayouts = () => {
    return (
        <div>
            
           <Outlet/>
     
        </div>
    );
};

export default MainLayouts;