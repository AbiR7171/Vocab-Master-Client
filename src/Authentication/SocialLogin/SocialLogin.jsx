import React, { useContext } from 'react';
import faceBook from '../../assets/images/facebook.png'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';

const SocialLogin = () => {
    const { googleSignIn, appleSignIn, facebookSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logByGoogle = result.user;
                console.log("from social login", logByGoogle.displayName, logByGoogle.email, logByGoogle.photoURL)
                // navigate(from, { replace: true })
                axios
                    .post("https://vocab-master-server.onrender.com/users", {
                        name: logByGoogle?.displayName,
                        email: logByGoogle?.email,
                        image: logByGoogle?.photoURL,
                        season: 1,
                        diamond: 0,
                        role: "student",
                        date: moment().format("D,MM,yyyy"),
                    })
                    .then((data) => {
                        console.log('post to user colection from social',data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Register",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate("/allRouts/learn");
                        }
                    })
                    .catch((err) => console.log(err));

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