import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../../../../assets/LottieAnimation/LoveStar.json"
import animation1 from "../../../../../assets/LottieAnimation/roundedStar.json"
import animation2 from "../../../../../assets/LottieAnimation/locked.json"
import useUsers from '../../../../../hooks/useUsers';
import { Icon } from "@iconify/react";

const StepSeasonFour = () => {

  const level = localStorage.getItem("level")
  console.log(level);

  const[userInfo]=useUsers()
  console.log(userInfo);

    return (
        <div className='bg-Backs'>
          {/* Container */}
          <div className="  lg:flex items-center justify-around gap-5 font-primary w-full h-full">
            {/* Unit 1 */}
            <div className="bg-black bg-opacity-30 w-full rounded p-6 flex justify-between">
              <div>
                <h2 className="text-white fw-bold text-2xl">Season 4</h2>
    
                <p className="text-white fw-bold">
                  
                </p>
              </div>
           
      <div className="flex items-center justify-center container bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   w-32 h-12  rounded-3xl  bg-opacity-50">
        <Icon icon="basil:diamond-solid" className="text-4xl text-green-900" /> <p className="text-4xl  text-red-900">{userInfo[0]?.diamond}</p>
        </div>
    
            </div>
          </div>
    
          {/* Get Started tooltip */}
          <div className="text-center items-center md:mx-[500px] my-12">
            <div
              className="tooltip tooltip-open tooltip-accent p-2"
              data-tip="GET STARTED"
            >
              {/* active button */}
             <Link to="/allRouts/learn/season4">
             <div 
               
                className="  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
               
              >
                     {
               userInfo[0]?.season >= 4 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
               :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />

             }
              </div>
             </Link>
            </div>
    
            {/* Other buttons */}  
           <Link to="/allRouts/learn/season4.2">
                        
           <div 
              className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
             
            > 

             {
               userInfo[0]?.season >= 4.2 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
               :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />

             }
              
              
            </div>

                 
           </Link>
            
           <Link to="/allRouts/learn/season4.3">
                        
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.3 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }
                           
                           
                         </div>
             
                              
                        </Link>

                        <Link to="/allRouts/learn/season4.4">
                        <div
                         
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 "
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.4 ? <Lottie animationData={animation}  className=' flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}     className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link>


                        <Link to="/allRouts/learn/season4.5">
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.5 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link>


                        <Link to="/allRouts/learn/season4.6">
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.6 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link>


                        <Link to="/allRouts/learn/season4.7">
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.7 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link>


                        <Link to="/allRouts/learn/season4.8">
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.8 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link>

                        <Link to="/allRouts/learn/season4.9">
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 4.9 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link>

{/* 
                        <Link to="/allRouts/learn/season2.10">
                        <div 
                           className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"
                          
                         > 
             
                          {
                            userInfo[0]?.season >= 2.9 ? <Lottie animationData={animation}  className='flex justify-center items-center w-32 ' loop={true} /> 
                            :    <Lottie animationData={animation2}   className='flex justify-center items-center w-32 ' loop={true} />
             
                          }     
                           
                         </div>   
                        </Link> */}
          </div>
        </div>
      );
}; 

export default StepSeasonFour;