import React, { useContext } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/LottieAnimation/earnPoints.json";
import { LanguageContext } from "../../../context/Context";
import Typewriter from "typewriter-effect";

const EarnPoints = () => {
  // language change feature
  const { language } = useContext(LanguageContext);
  const textContent = {
    en: {
      title: ["Free", "Fun", "Effective"],
      description:
        "Learning with VocabMaster is free, fun, and highly effective. Our quick, bite-sized lessons will help you earn points and unlock new levels, all while gaining real-world communication skills.",
    },
    bn: {
      title: ["বিনামূল্যে", "মজার", "কার্যকর"],
      description:
        "VocabMaster দিয়ে শেখা বিনামূল্যে, মজার, এবং অত্যন্ত কার্যকর। আমাদের দ্রুত, ছোট পর্যাপ্ত পাঠ আপনাকে পয়েন্ট সংগ্রহ করতে এবং নতুন স্তর আনলক করতে সাহায্য করবে, সবটি সম্পর্ক দক্ষতা অর্জন করার সাথে.",
    },
    hi: {
      title: ["मुफ्त।", "मजेदार।", "प्रभावी।"],
      description:
        "VocabMaster के साथ सीखना मुफ्त, मजेदार, और बेहद प्रभावी है। हमारे तेज़, छोटे पाठ आपको पॉइंट्स कमाने और नए स्तरों को खोलने में मदद करेंगे, साथ ही आप वास्तविक दुनिया में संवाद कौशल प्राप्त कर रहे हैं।",
    },
  };

  const { title, description } = textContent[language];
  // end

  return (
    <div className="mt-32 container mx-auto lg:px-32 px-12 flex lg:flex-row flex-col-reverse items-center">
      <div className="px- space-y-5">
        <h2 className="text-5xl font-bold">
          The
          <Typewriter
            options={{
              strings: [...title],
              autoStart: true,
              loop: true,
            }}
          />
          way to learn
        </h2>
        <p className="text-gray-400 flex items-center justify-center space-y">
          {description}
        </p>
      </div>
      <div className="lg:w-full w-[300px] lg:ms-[60px]">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default EarnPoints;
