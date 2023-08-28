import React, { useContext } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/LottieAnimation/quiz.json";
import { LanguageContext } from "../../../context/Context";
import TextToSpeechButton from "../../../components/TextToSpeech/TextToSpeechButton";


const QuizSection = () => {

  // language change feature
  const { language } = useContext(LanguageContext);
  const textContent = {
    en: {
      title: "Special Quiz.",
      description:
        "Learning with Duolingo is fun. With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.",
    },
    bn: {
      title: "বিশেষ কুইজ।",
      description:
        "Duolingo-এর সাথে শেখা মজাদার, দ্রুত, কামড়ের আকারের পাঠের সাথে, আপনি তা করবেন পয়েন্ট অর্জন করুন এবং বাস্তব-বিশ্ব অর্জন করার সময় নতুন স্তর আনলক করুন যোগাযোগ দক্ষতা",
    },
    hi: {
      title: "विशेष क्विज।",
      description:
        "डुओलिंगो के साथ सीखना मजेदार है। तेज़, छोटे पाठों के साथ, आप पॉइंट्स कमा सकते हैं और नए स्तरों को खोल सकते हैं जबकि आप वास्तविक दुनिया में संवाद कौशल प्राप्त कर रहे हैं।",
    },
  };
  const { title, description } = textContent[language];
  // end
  // text to speach button will take a array as a prop, array elemnt can be static  or dynamic pragraph
  const textToSpeechContant = [title, description]
  return (
    <div
      className="mt-32 container mx-auto px-20
        flex items-center flex-row-reverse
        "
    >
      <div className="px-20 space-y-5">
        <h2 className="text-5xl font-bold inline-block mr-5">{title}</h2>
        <div className=" inline-block"><TextToSpeechButton paragraphs={textToSpeechContant}></TextToSpeechButton></div>
        <p className="text-gray-400 flex items-center justify-center space-y">
          {description}
        </p>
      </div>

      <div className="">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default QuizSection;
