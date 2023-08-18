import React from "react";
import Lottie from "lottie-react";
import banner from "../../../assets/LottieAnimation/Banner.json"

const Banner = () => {
  return (
    <div
      className="container mx-auto lg:px-28 mt-20
        
        lg:flex items-center justify-around gap-5 font-primary
        
        "
    >
      <div className="">
        <Lottie animationData={banner} loop={true} />
      </div>

      <div className=" gap-4 flex flex-col items-center justify-center">
        <p className="text-2xl  ">The free, fun, and effective way to learn</p>

        <p className="text-2xl flex items-center justify-center">Vocabulary!</p>

        <button
          className="uppercase 
                bg-orange-700 w-9/12 py-4 text-white rounded-lg
                '
                >
                    Get started
                </button>

        <button
          className="uppercase 
                bg-slate-200 w-9/12 py-4 text-black rounded-lg
                '
                >
                    I Already have an account
                </button>

            </div>
            
        </div>
    );
};

export default Banner;
