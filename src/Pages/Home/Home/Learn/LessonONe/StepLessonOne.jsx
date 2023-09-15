import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../../../../assets/LottieAnimation/LoveStar.json"
import animation1 from "../../../../../assets/LottieAnimation/roundedStar.json"
import animation2 from "../../../../../assets/LottieAnimation/locked.json"
import useUsers from '../../../../../hooks/useUsers';
import { Icon } from "@iconify/react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import SpeechRecognitionComponent from "../../../../../components/Features/SpeechRecognitionComponent"

const StepLessonOne = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const level = localStorage.getItem("level")
  console.log(level);

  const [userInfo] = useUsers()
  console.log(userInfo);

  //text to speech features (meraj)
  const paragraphs = [
    'This is season one',
    'There are 9 category in this season',
    'First of all you have to learn level 1.1',
    'For start your learning command me: go to level 1.1',
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

  return (
    <div className='bg-Backs'>
      {/* Container */}
      <div className="  lg:flex items-center justify-around gap-5 font-primary w-full h-full">
        {/* Unit 1 */}
        <div className="bg-black bg-opacity-30 w-full rounded p-6 flex justify-between">
          <div>
            <h2 className="text-white fw-bold text-2xl">ইউনিট 1</h2>
            {/* ------------voce command component------------- */}
            <button onClick={handleSpeak}>{isSpeaking ? <FaVolumeUp size={32} title='Mute'></FaVolumeUp> : <FaVolumeMute title='Speak' size={32}></FaVolumeMute>}</button>
            <div className="">
              <SpeechRecognitionComponent setIsSpeaking={setIsSpeaking} handleSpeak={handleSpeak}></SpeechRecognitionComponent>
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
      <div className="text-center items-center mx-[500px] my-12">
        <div
          className="tooltip tooltip-open tooltip-accent p-2"
          data-tip="GET STARTED"
        >
          {/* active button */}
          <Link to="/allRouts/learn/sesson1">
            <div

              className="  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

            >
              <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
            </div>
          </Link>
        </div>

        {/* Other buttons */}
        <Link to="/allRouts/learn/season1.2">

          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 1.1 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }


          </div>


        </Link>

        <Link to="/allRouts/learn/season1.3">

          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 1.2 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }


          </div>


        </Link>

        <Link to="/allRouts/learn/season1.4">
          <div

            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 "

          >

            {
              userInfo[0]?.season >= 1.3 ? <Lottie animationData={animation} className=' flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season1.5">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 1.4 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season1.6">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 1.5 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season1.7">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 1.6 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season1.8">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 1.7 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>

        <Link to="/allRouts/learn/season1.9">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8 ms-32"

          >

            {
              userInfo[0]?.season >= 1.8 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>


        <Link to="/allRouts/learn/season1.10">
          <div
            className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  w-32 h-32  rounded-full flex border-4 border-[#450e0e] border-b-8"

          >

            {
              userInfo[0]?.season >= 1.9 ? <Lottie animationData={animation} className='flex justify-center items-center w-32 ' loop={true} />
                : <Lottie animationData={animation2} className='flex justify-center items-center w-32 ' loop={true} />

            }

          </div>
        </Link>
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