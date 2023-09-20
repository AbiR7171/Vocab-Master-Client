import React, { useContext } from 'react';
// import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import svg from '../../assets/register/undraw_login_re_4vu2.svg'
import galaxy from '../../assets/images/Background1.jpg'
import useAdmin from '../../hooks/useAdmin';



const Login = () => {

    const { signin } = useContext(AuthContext);
    // const [error, setError] = useState('');

    const [isAdmin] = useAdmin();

    console.log(isAdmin);


    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || "/allRouts/learn";

    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { email, password }
        console.log(data)

        signin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                Swal.fire('Login successfull')
                navigate(`${!isAdmin ? "/allRouts/learn" : "/allRouts/adminHome"}`)

            })
            .catch(error => {
                // console.log(error);

                Swal.fire(`${error.message}`)

            })
    }



    // const onSubmit = data => {
    //     console.log(data)
    //     signin(data.email, data.password)
    //         .then(result => {
    //             const logedUser = result.user;
    //             console.log(logedUser)
    //             reset()
    //             Swal.fire('Login successfull')
    //             navigate(from, { replace: true })

    //         })
    // }

    return (
        <div>
            <div className="hero min-h-screen bg-Back">
                <div className="card w-95/100 md:w-1/3 mx-auto md:px-5 shadow-2xl bg-base-100 bg-opacity-50">
                    <h1 className="text-5xl text-slate-800 text-center font-bold font-serif p-5">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit} className="card-body text-black">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>


                    <div className="mt-6">
                        <p><SocialLogin></SocialLogin></p>
                    </div>

                    <p className=' text-center my-5 text-black'>Don't have account ? <Link className='text-lime-800 font-bold' to='/register'>Sign up</Link></p>
                </div>

                {/* <p className='text-error text-center mt-10'>{error}</p> */}

            </div>
        </div>

    );
};

export default Login;