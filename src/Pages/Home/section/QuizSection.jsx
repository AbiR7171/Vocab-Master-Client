import React, { useContext } from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/LottieAnimation/quiz.json";
import { LanguageContext } from "../../../context/Context";

const QuizSection = () => {
  // language change feature
  const { language } = useContext(LanguageContext);
  const textContent = {
    en: {
      title: "Special Quiz.",
      description:
        "Enhance your vocabulary with VocabMaster! Learning here is engaging and effective. Through quick, bite-sized lessons, you'll accumulate points and unlock new levels while gaining practical communication skills.",
    },
    bn: {
      title: "বিশেষ কুইজ।",
      description:
        "VocabMaster দিয়ে আপনার শব্দভান্ডার দ্বারা আপনার শব্দকোষ উন্নত করুন! এখানে শেখা মজাদার এবং কার্যকর। দ্রুত, আঘাতকর পাঠের মাধ্যমে, আপনি পয়েন্ট সংগ্রহ করবেন এবং নতুন স্তর আনলক করবেন, যাদের সাথে আপনি বাস্তব যোগাযোগ দক্ষতা অর্জন করতে যাচ্ছেন।",
    },
    hi: {
      title: "विशेष क्विज।",
      description:
        "VocabMaster के साथ अपने शब्दावली को बढ़ाएं! यहाँ सीखना मनोरंजनपूर्ण और प्रभावी है। तेज़, छोटे पाठों के माध्यम से, आप अंक जमा करेंगे और नए स्तरों को खोलेंगे, जबकि आप प्रैक्टिकल संवाद कौशल प्राप्त कर रहे हैं।",
    },
  };

  const { title, description } = textContent[language];
  // end

  return (
    <div
      className="mt-32 container mx-auto lg:px-32 px-12 flex lg:flex-row flex-col-reverse items-center
        "
    >
      <div className="px-auto space-y-5">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-gray-400 flex items-center justify-center space-y">
          {description}
        </p>
      </div>

      <div className="lg:w-auto w-[500px]">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default QuizSection;
