import React, { useContext } from "react";
import Lottie from "lottie-react";
import banner from "../../../assets/LottieAnimation/Banner.json";
import { LanguageContext } from "../../../context/Context";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";



const Banner = () => {
  const { language } = useContext(LanguageContext);
  const { user, logOut } = useContext(AuthContext);
  // console.log(language, user);

  const signout = () => {
    logOut((user) => {
      console.log(user);
    });
  };

  const [isAdmin] = useAdmin();

  const textContent = {
    en: {
      heading1: `The free, fun, and effective way to learn`,
      heading2: "Vocabulary!",
      getStartedButton: "Get started",
      userAvailableGetStartedButton: "Continue session",
      alreadyHaveAccountButton: "I Already have an account",
      userAvailableHaveAccountButton: `Not "${user && user.displayName
        }"? logout.`,
    },
    bn: {
      heading1: "বিনামূল্যে, মজার এবং কার্যকর শেখার উপায়!",
      heading2: "শব্দকোষ!",
      getStartedButton: "শুরু করুন",
      userAvailableGetStartedButton: "সেশন চালিয়ে যান",
      alreadyHaveAccountButton: "আমার ইতিমধ্যে একটি অ্যাকাউন্ট আছে",

      userAvailableHaveAccountButton: `"${user && user.displayName
        }" না? লগআউট.`,
    },
    hi: {
      heading1: "मुफ्त, मजेदार और प्रभावी तरीका सीखने का",
      heading2: "शब्दावली!",
      getStartedButton: "शुरू हो जाओ",
      userAvailableGetStartedButton: "सत्र जारी रखें",
      alreadyHaveAccountButton: "मेरे पास पहले से ही खाता है",
      userAvailableHaveAccountButton: `"${user && user.displayName
        }" नहीं? लॉगआउट.`,
    },
  };

  const {
    heading1,
    heading2,
    getStartedButton,
    alreadyHaveAccountButton,
    userAvailableGetStartedButton,
    userAvailableHaveAccountButton,
  } = textContent[language];

  return (
    <div className="container mx-auto lg:px-28 mt-20 lg:flex items-center justify-around gap-5 font-primary">
      <div className="lg:w-auto w-[300px] flex items-center justify-center mx-auto">
        <Lottie animationData={banner} loop={true} />
      </div>

      <div className="gap-4 flex flex-col items-center justify-center">

        <p className="text-6xl font-mono font-bold  shadow-sm text-slate-800 flex items-center justify-center">{heading2}</p>
        <p className="text-sm shadow-sm text-slate-800 flex items-center justify-center">{heading1}</p>
        <hr />
        <div className="flex justify-center gap-5">
          <button className=" uppercase bg-orange-700 lg:w-3/6 w-2/6 py-4 text-white rounded-lg">
            {user ? (
              <Link to="/allRouts/learn">{userAvailableGetStartedButton}</Link>
            ) : (
              <Link to="/register">{getStartedButton}</Link>
            )}
          </button>

          <button className=" uppercase bg-slate-200 lg:w-9/12 w-6/12 py-4 text-black rounded-lg border-black">
            {user ? (
              <Link onClick={signout}>{userAvailableHaveAccountButton}</Link>
            ) : (
              <Link to="/allRouts/learn">{alreadyHaveAccountButton}</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
