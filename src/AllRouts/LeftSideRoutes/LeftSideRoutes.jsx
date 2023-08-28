import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { FcHome } from 'react-icons/fc';
import { Link, Outlet } from 'react-router-dom';
import { GiSaloonDoors } from "react-icons/gi";
import { FaCartShopping} from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiDotsThreeCircle } from "react-icons/pi";

const LeftSideRoutes = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ">
                {/* Page content here */} <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full fixed  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white border border-black ">
                    {/* Sidebar content here */}
                    <h2 className='ms-5 text-3xl text-emerald-500 font-bold mb-5 font-Logo'>Vocab Master</h2>
                    <li className='ms-5 text-xl font-semibold'><Link to="/allRouts/learn"><FcHome></FcHome> শিখুন</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link><FaUsers></FaUsers> লিডারবোর্ড</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link><GiSaloonDoors></GiSaloonDoors> অভিযান</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link><FaCartShopping></FaCartShopping> শপ</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link><CgProfile></CgProfile> প্রোফাইল</Link></li>
                    <li className='ms-5 text-xl font-semibold'><Link to="/"><PiDotsThreeCircle></PiDotsThreeCircle> হোম</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default LeftSideRoutes;