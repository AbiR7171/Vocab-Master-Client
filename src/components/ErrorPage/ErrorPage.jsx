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
                    
                    <div className='w-3/6'>
                    <Lottie animationData={errors} loop={true} />

                    </div>
                    <div className=' text-center flex gap-5'>
                        
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