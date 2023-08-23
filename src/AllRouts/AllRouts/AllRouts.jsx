import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideRoutes from '../LeftSideRoutes/LeftSideRoutes';

const AllRouts = () => {
    return (


        <div>
            <LeftSideRoutes></LeftSideRoutes>
            <Outlet></Outlet>
        </div>
    );
};

export default AllRouts;