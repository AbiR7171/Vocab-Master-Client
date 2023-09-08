import React from 'react';
import {FaUsers} from 'react-icons/fa'
import { FcHome } from 'react-icons/fc';
import { Link, Outlet } from 'react-router-dom';
import { GiSaloonDoors } from "react-icons/gi";
import { FaCartShopping} from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiDotsThreeCircle } from "react-icons/pi";
import useAdmin from '../../hooks/useAdmin';

const LeftSideRoutes = () => {

    const[isAdmin]=useAdmin()

    console.log(isAdmin);

    // const isAdmin = true;


    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ms-80 h-full ">
                {/* Page content here */} <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={`menu p-4 w-80 h-full  fixed  space-y-1 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white border border-black `}>
                    {/* Sidebar content here */}
                    <h2 className='ms-5 text-3xl text-emerald-500 font-bold mb-5 font-Logo  '>Vocab Master</h2>


                 {
                    isAdmin ?
                    <>

                    <li  className='ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl'><Link to="/allRouts/adminHome">Admin Home</Link></li>
                    <li  className='ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl'><Link to="/allRouts/manageUsers">Manage User</Link></li>
                    <li  className='ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl'><Link to="/allRouts/wordRequest">Word Request</Link></li>
                    <li  className='ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl'><Link to="/allRouts/manageWords">Manage Words</Link></li>
                    <li  className='ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl'><Link to="/">Home</Link></li>
                  
                    </>


                    :
                    <>

                    <li className='ms-5 text-xl font-semibold uppercase'><Link to="/allRouts/learn"><FcHome></FcHome> Home</Link></li>
                    <li className='ms-5 text-xl font-semibold uppercase'><Link to="/allRouts/leaderBoard"><FaUsers></FaUsers> Leaderboard</Link></li>
                    <li className='ms-5 text-xl font-semibold uppercase'><Link to="/allRouts/sentWordRequest"><GiSaloonDoors></GiSaloonDoors> Word Request</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link><FaCartShopping></FaCartShopping> শপ</Link></li>
                    <li className='ms-5 text-xl font-semibold uppercase'><Link><CgProfile></CgProfile> profile</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link to="/"><PiDotsThreeCircle></PiDotsThreeCircle> Home</Link></li>
                    </>
                 }
                    
                </ul>

            </div>
        </div>
    );
};

export default LeftSideRoutes;