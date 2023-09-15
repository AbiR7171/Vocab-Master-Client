import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import NavBar from "../../../Shared/NavBar";
import Footer from "../../../Shared/Footer";
import EarnPoints from "../section/EarnPoints";
import QuizSection from "../section/QuizSection";
import Sponsor from "./Sponsor";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import SpeechRecognitionComponent from "../../../components/Features/SpeechRecognitionComponent";
import HomeFeedback from "../Banner/HomeFeedback";


import { Contact } from "../contact/Contact";

const Home = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  //text to speech features (meraj)
  const paragraphs = [
    "Hi there, welcome to our Vocab Master",
    "Free, Fun, Effective",
    "Learning with VocabMaster is free, fun, and highly effective. Our quick, bite-sized lessons will help you earn points and unlock new levels, all while gaining real-world communication skills.",
    "Special Quiz",
    "Enhance your vocabulary with VocabMaster! Learning here is engaging and effective. Through quick, bite-sized lessons, you'll accumulate points and unlock new levels while gaining practical communication skills.",
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
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      <NavBar />
      {/* ------------voce command component------------- */}
      <button onClick={handleSpeak}>
        {isSpeaking ? (
          <FaVolumeUp size={32} title="Mute"></FaVolumeUp>
        ) : (
          <FaVolumeMute title="Speak" size={32}></FaVolumeMute>
        )}
      </button>
      <div className="">
        <SpeechRecognitionComponent
          setIsSpeaking={setIsSpeaking}
          handleSpeak={handleSpeak}
        ></SpeechRecognitionComponent>
      </div>
      {/* ------------end voice comand part-------------- */}
      <Banner />
      <EarnPoints />
      <QuizSection />
      <Sponsor></Sponsor>
      <HomeFeedback/>
      <Footer />
      <Contact></Contact>
      <div id="contact">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
