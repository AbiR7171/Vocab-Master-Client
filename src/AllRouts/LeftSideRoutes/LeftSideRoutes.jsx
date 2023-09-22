import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FcHome, FcMenu } from "react-icons/fc";
import { Link, Outlet } from "react-router-dom";
import { GiSaloonDoors } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiDotsThreeCircle } from "react-icons/pi";
import useAdmin from "../../hooks/useAdmin";
import SpeechRecognitionComponent from "../../components/Features/SpeechRecognitionComponent";
import { Icon } from "@iconify/react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const LeftSideRoutes = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  // const [isAdmin] = useAdmin()

  const isAdmin = false;
  console.log(isAdmin);

  // const isAdmin = true;

  //text to speech features (meraj)
  const paragraphs = [
    "This is our main layout",
    "There are a side navber and a main content",
    "There are six planets, each planet is a season and each season has 10 category",
    "To learn season one say, go to season one and so on",
    "Start your vocabulary learning journey",
    "Thank you",
  ];

  const handleSpeak = () => {
    if (isSpeaking === false) {
      const utterances = paragraphs.map((content) => {
        const utterance = new SpeechSynthesisUtterance(content);
        return utterance;
      });

      utterances.forEach((utterance) => speechSynthesis.speak(utterance));
      setIsSpeaking(true);
    } else {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  //-------------------------------------------

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center h-full ">
        {/* Page content here */} <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn bg-transparent border-0 absolute top-2 left-2 drawer-button lg:hidden"
        >
          <FcMenu size={32}></FcMenu>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul
          className={`menu p-4 md:p-4 w-60 md:w-72 h-full  fixed  space-y-1 bg-black opacity-50  `}
        >
          {/* Sidebar content here */}
          <h2 className=" font-primary mb-4 lg:mb-0 text-3xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-300">
            𝓥𝓸𝓬𝓪𝓫𝓜𝓪𝓼𝓽𝓮𝓻
          </h2>
          {/* ------------voce command component------------- */}
          <div className="flex gap-2 w-48 mx-2 justify-between items-center border-2 border-blue-600 rounded-lg px-2">
            <div>
              <SpeechRecognitionComponent
                setIsSpeaking={setIsSpeaking}
                handleSpeak={handleSpeak}
              ></SpeechRecognitionComponent>
            </div>
            <button onClick={handleSpeak}>
              {isSpeaking ? (
                <FaVolumeUp size={32} title="Mute"></FaVolumeUp>
              ) : (
                <FaVolumeMute title="Speak" size={32}></FaVolumeMute>
              )}
            </button>
          </div>
          {/* ------------end voice comand part-------------- */}

          {isAdmin ? (
            <>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/allRouts/adminHome">Admin Home</Link>
              </li>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/allRouts/manageUsers">Manage User</Link>
              </li>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/allRouts/wordRequest">Word Request</Link>
              </li>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/allRouts/manageWords">Manage Words</Link>
              </li>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/allRouts/adminIssue">Manage Issue</Link>
              </li>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/allRouts/adminfeedback">Manage Feedback</Link>
              </li>
              <li className="ms-5 text-xl font-semibold font-Sec  border border-black rounded-xl">
                <Link to="/">Home</Link>
              </li>
            </>
          ) : (
            <>
              <li className="ms-5 text-xl font-semibold uppercase">
                <Link to="/allRouts/learn">
                  <FcHome></FcHome> Learn
                </Link>
              </li>
              <li className="ms-5 text-xl font-semibold uppercase">
                <Link to="/allRouts/leaderBoard">
                  <FaUsers></FaUsers> Leaderboard
                </Link>
              </li>
              <li className="ms-5 text-xl font-semibold uppercase">
                <Link to="/allRouts/sentWordRequest">
                  <GiSaloonDoors></GiSaloonDoors> Word Request
                </Link>
              </li>
              <li className="ms-5 text-xl font-semibold uppercase">
                <Link to="/allRouts/issue">
                  <Icon icon="pajamas:issue-block" />
                  Issue
                </Link>
              </li>
              <li className="ms-5 text-xl font-semibold uppercase">
                <Link to="/allRouts/feedback">
                  {" "}
                  <Icon icon="fluent-mdl2:feedback" /> Feedback
                </Link>
              </li>
              <li className="ms-5 text-xl font-semibold uppercase">
                <Link to="/allRouts/userProfile">
                  <CgProfile></CgProfile> profile
                </Link>
              </li>
              <li className="ms-5 text-xl font-semibold">
                <Link to="/">
                  <PiDotsThreeCircle></PiDotsThreeCircle> Home
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideRoutes;
