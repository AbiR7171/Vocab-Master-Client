import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../../../../assets/LottieAnimation/LoveStar.json"
import animation1 from "../../../../../assets/LottieAnimation/roundedStar.json"
import animation2 from "../../../../../assets/LottieAnimation/locked.json"
import useUsers from '../../../../../hooks/useUsers';
import { Icon } from "@iconify/react";
import SpeechRecognitionComponent from '../../../../../components/Features/SpeechRecognitionComponent';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { useState } from 'react';

const StepSeasonTwo = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const level = localStorage.getItem("level")
  console.log(level);

  const [userInfo] = useUsers()
  console.log(userInfo);

  //text to speech features (meraj)
  const paragraphs = [
    'This is season two',
    'There are 9 category in this season',
    'There are 10 words in a category',
    'For start your learning, command me: go to level 2.1',
    'Thank you'
  ]

  const handleSpeak = () => {

    if (isSpeaking === false) {
      const utterances = paragraphs.map(content => {
        const utterance = new SpeechSynthesisUtterance(content);
        return utterance;
      });

      utterances.forEach(utterance => speechSynthesis.speak(utterance));
      setIsSpeaking(true);
    } else {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }
  //-------voice command end---------------//

  return (
    <div className='bg-Backs'>
      {/* Container */}
      <div className="  lg:flex items-center justify-around gap-5 font-primary w-full h-full">
        {/* Unit 1 */}
        <div className="bg-black bg-opacity-30 w-full rounded p-6 flex justify-between">
          <div className='md:flex gap-5'>
            <h2 className="text-white fw-bold text-2xl">Season 2</h2>
            {/* ------------voce command component------------- */}
            <div className='flex gap-2 w-48 justify-between items-center border-2 border-blue-600 rounded-lg px-2'>
              <div>
                <SpeechRecognitionComponent setIsSpeaking={setIsSpeaking} handleSpeak={handleSpeak}></SpeechRecognitionComponent>
              </div>
              <button onClick={handleSpeak}>{isSpeaking ? <FaVolumeUp size={32} title='Mute'></FaVolumeUp> : <FaVolumeMute title='Speak' size={32}></FaVolumeMute>}</button>
            </div>
            {/* ------------end voice comand part-------------- */}
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
          <Link to="/allRouts/learn/season2.1">
            <div

              className="  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

            >
              {
                userInfo[0]?.season >= 2 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                  : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

              }
            </div>
          </Link>
        </div>

        {/* Other buttons */}
        <Link to="/allRouts/learn/season2.2">

          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 2.1 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }


          </div>


        </Link>

        <Link to="/allRouts/learn/season2.3">

          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 2.2 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }


          </div>


        </Link>

        <Link to="/allRouts/learn/season2.4">
          <div

            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 "

          >

            {
              userInfo[0]?.season >= 2.3 ? <Lottie animationData={animation} className=' flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season2.5">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 2.4 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season2.6">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 2.5 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season2.7">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 2.6 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season2.8">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 2.7 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>

        <Link to="/allRouts/learn/season2.9">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 2.8 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

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

  )
};

export default StepSeasonTwo;