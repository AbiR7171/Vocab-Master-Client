import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };


    return (
        <div>
            <h2 className='text-center text-[#69235B] text-[18px] md:text-[40px] font-[700]'>Please Register</h2>
            <div className='w-[293px] h-10 md:w-[440px] md:h-16 leading-[20px] md:leading-[30px] mx-auto text-[#69235B] mt-7 text-center'>
                <p className='font-[300] text-[14px] md:text-[24px]'>Welcome back! Sign in using your social account or email to continue us</p>
            </div>


            {/* -------------------registration info---------------- */}
            <div className="">

                <div className="md:w-[440px] mx-auto mt-5 md:mt-10">

                    <div className="w-full ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="">
                                <label className="label">
                                    <span className="text-[#69235B] font-[500] text-[14px] md:text-[20px]">Your Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="" className="border-b-2 w-full" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="mt-7">
                                <label className="label">
                                    <span className="text-[#69235B] font-[500] text-[14px] md:text-[20px]">Your Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="" className="border-b-2 w-full" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="mt-7">
                                <label className="label">
                                    <span className="text-[#69235B] font-[500] text-[14px] md:text-[20px]">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/ })} name='password' placeholder="" className="border-b-2 w-full" />
                                {errors.password?.type === 'require' && <span className='text-red-500'>Passwored is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>passworde must be 6 cherecter</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Must be at least one digit, one uppercase and lowerCase and one Special cherecter</span>}
                            </div>

                            {/* <div className="mt-7">
                                <label className="label">
                                    <span className="text-[#69235B] font-[500] text-[14px] md:text-[20px]">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" ref={register({required: true,
                                        validate: (value) => value === watch('password')
                                    })}
                                /> {errors.confirmPassword && <p>Passwords do not match</p>}
                            </div> */}

                            <div className="form-control mt-10">
                                <input className="bg-[#FFC746] h-[54px] rounded-md text-[#69235B] font-[500] text-[20px] cursor-pointer" type="submit" value="Create an Account" />
                                
                                <p className='text-center text-[--text-color] font-[400] text-[20px] mt-4'>Already have an Account?<Link to="/login" className='text-[#FFC746]'>Login</Link></p>
                            
                            </div>

                        </form>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;