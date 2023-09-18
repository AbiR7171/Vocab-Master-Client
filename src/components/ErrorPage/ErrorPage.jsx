import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
// import img from '../../assets/register/undraw_page_not_found_re_e9o6 (1).svg'

import errors from "../../assets/hasan/error.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
    // const { error, status } = useRouteError();



    return (
        <div>
            <section className='flex items-center'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto h-fit'>
                    {/* <img src={img} alt="" /> */}
                    <div className='w-3/6'>
                    <Lottie animationData={errors} loop={true} />

                    </div>
                    <div className=' text-center flex gap-5'>
                        {/* <p className='text-2xl font-semibold md:text-3xl border border-spacing-2 border-gray-500 m-20 p-5 rounded-md text-orange-700'>
                               {error?.message} 
                        </p> */}
                        <button className="btn btn-outline btn-success mb-20"><Link
                            to='/'>
                            go to homepage
                        </Link></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;