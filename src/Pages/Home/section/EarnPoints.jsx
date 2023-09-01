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
        "Learning with Duolingo is fun. With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.",
    },
    bn: {
      title: "বিনামূল্যে, মজার এবং কার্যকর উপায়!",
      description:
        "Duolingo-এর সাথে শেখা মজাদার, দ্রুত, কামড়ের আকারের পাঠের সাথে, আপনি তা করবেন পয়েন্ট অর্জন করুন এবং বাস্তব-বিশ্ব অর্জন করার সময় নতুন স্তর আনলক করুন যোগাযোগ দক্ষতা",
    },
    hi: {
      title: "मुफ्त। मजेदार। प्रभावी।",
      description:
        "डुओलिंगो के साथ सीखना मजेदार है। तेज़, छोटे पाठों के साथ, आप पॉइंट्स कमा सकते हैं और नए स्तरों को खोल सकते हैं जबकि आप वास्तविक दुनिया में संवाद कौशल प्राप्त कर रहे हैं।",
    },
  };
  const { title, description } = textContent[language];
  // end

  return (
    <div className="mt-32 container mx-auto px-32 flex items-center">
      <div className="px-20 space-y-5">
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
      <div className="w-full">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default EarnPoints;
