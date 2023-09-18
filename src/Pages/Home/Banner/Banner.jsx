import React, { useContext } from "react";
import Lottie from "lottie-react";
import banner from "../../../assets/LottieAnimation/Banner.json";
import { LanguageContext } from "../../../context/Context";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";



const Banner = () => {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(AuthContext)
  console.log(language, user);

  const [isAdmin] = useAdmin()

  const textContent = {
    en: {
      heading1: `The free, fun, and effective way to learn`,
      heading2: "Vocabulary!",
      getStartedButton: "Get started",
      alreadyHaveAccountButton: "I Already have an account",
    },
    bn: {
      heading1: "বিনামূল্যে, মজার এবং কার্যকর শেখার উপায়!",
      heading2: "শব্দকোষ!",
      getStartedButton: "শুরু করুন",
      alreadyHaveAccountButton: "আমার ইতিমধ্যে একটি অ্যাকাউন্ট আছে",
    },
    hi: {
      heading1: "मुफ्त, मजेदार और प्रभावी तरीका सीखने का",
      heading2: "शब्दावली!",
      getStartedButton: "शुरू हो जाओ",
      alreadyHaveAccountButton: "मेरे पास पहले से ही खाता है",
    },
  };

  const { heading1, heading2, getStartedButton, alreadyHaveAccountButton } =
    textContent[language];

  return (
    <div className="container mx-auto lg:px-28 mt-20 lg:flex items-center justify-around gap-5 font-primary">
      <div className="lg:w-auto w-[300px] flex items-center justify-center mx-auto">
        <Lottie animationData={banner} loop={true} />
      </div>

      <div className="gap-4 flex flex-col items-center justify-center">

        <p className="text-4xl shadow-sm text-slate-800 flex items-center justify-center">{heading2}</p>

        <p className="font-bold shadow-lg text-slate-800 text-center mx-12">{heading1}</p>

        <div className="grid grid-cols-3 gap-5">
          <button className="uppercase bg-orange-700 px-3 py-4 text-white rounded-lg">
            <Link to="/register">{getStartedButton}</Link>
          </button>

          <button className="uppercase bg-slate-200   py-4 text-black rounded-lg text-sm col-span-2">
            <Link to="/allRouts/learn">{alreadyHaveAccountButton}</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
