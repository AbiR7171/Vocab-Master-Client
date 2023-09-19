import React, { useContext } from 'react';
import faceBook from '../../assets/images/facebook.png'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn, appleSignIn, facebookSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logByGoogle = result.user;
                console.log(logByGoogle)
                navigate(from, { replace: true })

            })
    }

   
    const handelAppleSignIn = () => {
        appleSignIn()
        navigate(from, { replace: true })
            
    }

   
    const handelFacebookSignIn = () => {
        facebookSignIn()
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true })
        })
    }


    return (
        <div className='mb-3'>
            <div className='text-center'>
                {/* <button onClick={handelGoogleSignIn} className="btn btn-circle btn-outline text-[--text-color] text-center">
                    <FaGoogle></FaGoogle>
                </button> */}
                <div className='flex justify-center items-center gap-4 text-[32px] text-white mt-[-50px]'>
                    <button onClick={handelFacebookSignIn} ><img src={faceBook} alt="" className='w-[50px] h-[50px] border-solid border-[#A8B0AF] border-[1px] rounded-full p-2 ' /></button>
                    <button onClick={handelGoogleSignIn} className=' border-solid border-[#A8B0AF] border-[1px] rounded-full p-2'><FcGoogle></FcGoogle></button>
                    <button onClick={handelAppleSignIn} className=' border-solid border-[#A8B0AF] border-[1px] text-black rounded-full p-2'><FaApple></FaApple></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;