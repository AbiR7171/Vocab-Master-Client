import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../../../../assets/LottieAnimation/LoveStar.json"
import animation1 from "../../../../../assets/LottieAnimation/roundedStar.json"
import animation2 from "../../../../../assets/LottieAnimation/locked.json"

const StepLessonOne = () => {

  const level = localStorage.getItem("level")
  console.log(level);

    return (
        <div className='bg-Backs'>
          {/* Container */}
          <div className="  lg:flex items-center justify-around gap-5 font-primary w-full h-full">
            {/* Unit 1 */}
            <div className="bg-black bg-opacity-30 w-full rounded p-6 flex justify-between">
              <div>
                <h2 className="text-white fw-bold text-2xl">ইউনিট 1</h2>
    
                <p className="text-white fw-bold">
                  নিজের পরিচয় দেয়া, অন্যদের পরিচয়
                </p>
              </div>
              <button className="btn btn-outline"> Default</button>
            </div>
          </div>
    
          {/* Get Started tooltip */}
          <div className="text-center items-center mx-[500px] my-12">
            <div
              className="tooltip tooltip-open tooltip-accent p-2"
              data-tip="GET STARTED"
            >
              {/* active button */}
             <Link to="/allRouts/learn/sesson1">
             <div
                className="  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
                onClick={() => window.my_modal_2.showModal()}
              >
                   <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} />
              </div>
             </Link>
            </div>
    
            {/* Other buttons */}
            <div 
              className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
              onClick={() => window.my_modal_2.showModal()}
            > 

             {
               level == 1.1 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
               :    <Lottie animationData={animation2}  className='flex justify-center items-center w-32 ' loop={true} />

             }
              
              
            </div>
            
            <div
              className=" bg-[#E5E5E5]  w-24 h-24 b rounded-full flex border- border-[#7e7b7b] border-b-8 mx-auto my-3"
              onClick={() => window.my_modal_2.showModal()}
            >
              
             {
               level == 1.2 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
               :    <Lottie animationData={animation2}  className='flex justify-center items-center w-32 ' loop={true} />

             }
            </div>
            <div
              className=" bg-[#E5E5E5]  w-24 h-24 b rounded-full flex border- border-[#7e7b7b] border-b-8 mx-auto my-3"
              onClick={() => window.my_modal_2.showModal()}
            >
              
             {
               level == 1.4 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
               :    <Lottie animationData={animation2}  className='flex justify-center items-center w-32 ' loop={true} />

             }
            </div>
          </div>
    
          {/* Modal */}
          <dialog id="my_modal_3" className="modal absolute top-[-100px]">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                ✕
              </button>
    
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4 bg-red-500 w-6"><Link>Start</Link></p>
            </form>
          </dialog>
        </div>
      );
}; 

export default StepLessonOne;