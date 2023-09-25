import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import useUsers from "../../../../hooks/useUsers";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Authentication/Provider/AuthProvider";
import SpeechRecognitionComponent from "../../../../components/Features/SpeechRecognitionComponent";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import succesfully from "../../../../assets/LottieAnimation/succesfully.json"
import Lottie from "lottie-react";
import vocabAnime from "../../../../assets/LottieAnimation/Banner.json";


const LessOnSlider = ({ lesson, index }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disable, setDisable] = useState(false);
  const [userInfo, refetch] = useUsers();
  const [right, setRight] = useState(false);

  const handleOptionChange = (event) => {
    event.preventDefault()
    setSelectedOption(event.target.value);
    console.log('option clicked',event.target.value);
    setDisable(true);

    if (event.target.value == `${lesson.quiz.correctAnswer}`) {

      // <Lottie animationData={succesfully} loop={true} />

      axios
        .patch(
          `https://vocab-master-server.onrender.com/singleUser/users?email=${user.email}`,
          {
            diamond: userInfo[0].diamond,
          }
        )
        .then((data) => {
          // console.log(data);
          if (data.data.matchedCount > 0) {
            refetch();
            setRight(true)
          }
        });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Awesome Write Answer",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops... <br> Wrong Answer",
        text: ` Write Answer is: ${lesson.quiz.correctAnswer} `,
      });
    }
  };

  //text to speech features (meraj)
  const paragraphs = [
    `Welcome to Your  Vocabulary Lesson`,
    `this is word number ${index + 1}`,
    `level: ${lesson?.level}`,
    `Defficulty level: ${lesson?.difficultyLevel}`,
    `In this slide we will learn the word: ${lesson?.word}`,
    `This word is a ${lesson?.partsOfSpeech}`,
    lesson?.definition,
    `Let me give some examples`,
    `Example 1: ${lesson?.examples[0]}`,
    `Example 2: ${lesson?.examples[1]}`,
    `Example 3: ${lesson?.examples[2]}`,
    `There is a Quiz for you`,
    `your question is`,
    lesson?.quiz?.question,
    `and your options are`,
    lesson.quiz.options[0],
    lesson.quiz.options[1],
    lesson.quiz.options[2],
    `please,select the correct option and move to the next word, thank you`,
  ];

  const content = "hi there, how are you ?";

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


  return (
    <div className="container px-2 md:px-20 md:flex justify-between items-center gap-20 font-Sec">
      {/* <img src={lesson.categoryImage} alt="" /> */}

      {/*--------------- main content part start--------------- */}
      <div className="w-full md:w-3/5 ">
        {/* ------------voce command component------------- */}
        <div className='flex gap-2 w-48 justify-between items-center border-2 border-blue-600 rounded-lg px-2'>
          <div>
            <SpeechRecognitionComponent setIsSpeaking={setIsSpeaking} handleSpeak={handleSpeak}></SpeechRecognitionComponent>
          </div>
          <button onClick={handleSpeak}>{isSpeaking ? <FaVolumeUp size={32} title='Mute'></FaVolumeUp> : <FaVolumeMute title='Speak' size={32}></FaVolumeMute>}</button>
        </div>
        {/* ------------end voice comand part-------------- */}
        <div className="flex justify-between items-center text-green-500 mb-5">
          <p className="text-lg md:text-2xl font-bold me-2">Word No. {index + 1}</p>
          <p className="text-lg md:text-2xl font-bold me-2">Level: {lesson.level}</p>
          <p className="text-lg md:text-2xl font-bold ">
            Defficulty level:
            <span className="uppercase ms-2 text-xl ">
              {lesson?.difficultyLevel}
            </span>
          </p>
        </div>



        <div className="border border-sky-500 p-2 rounded shadow-glow mb-5">
          <p className=" text-xl md:text-4xl font-bold text-white ">
            Word: {lesson?.word}
          </p>

          <div className="md:flex justify-between  items-center text-green-600  ">
            <div className="flex items-center">
              <p className="text-3xl font-semibold ">Meaning :</p>

              <ul className="flex items-center mt-2  font-bold ">
                <li className="ms-2 font-bold">{lesson.meaning.originalBangla[0]},</li>
                <li className="ms-2 font-bold">{lesson?.meaning?.originalBangla[1]}</li>
              </ul>
            </div>

            <div className="flex items-center font-serif text-gray-300">
              <p className="text-lg md:text-xl font-semibold ">Part Of Speech :</p>

              <p className=" text-xl md:text-xl ms-2">{lesson.partsOfSpeech}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className=" text-white">
            <p className="text-lg md:text-2xl font-semibold ">Antonyms :</p>

            <ul className="font-semibold text-lg md:text-2xl ">
              <li className="ms-2"> 1.{lesson?.antonyms[0]}</li>
              <li className="ms-2">2.{lesson?.antonyms[1]}</li>
            </ul>
          </div>

          <div className=" w-[150px] flex items-center justify-center mx-auto">
            <Lottie animationData={vocabAnime} loop={true} />
          </div>

          <div className=" text-white">
            <p className="font-semibold text-lg md:text-2xl ">Synonyms :</p>

            <ul className=" font-semibold text-lg md:text-2xl ">
              <li className="ms-2"> 1.{lesson?.synonyms[0]}</li>
              <li className="ms-2">2.{lesson?.synonyms[1]}</li>
            </ul>
          </div>
        </div>

        <div className="border border-sky-500 p-2 rounded shadow-glow">
          <p className="text-lg md:text-2xl  text-green-500 font-serif">
            Definition: {lesson.definition}
          </p>

          <div className="text-white my-2 ">
            <p className="text-2xl font-semibold ">Examples</p>

            <ul className=" font-semibold  ">
              <li className="ms-2">1.{lesson.examples[0]}</li>
              <li className="ms-2">2.{lesson.examples[1]}</li>
              <li className="ms-2">3.{lesson.examples[2]}</li>
            </ul>
          </div>

        </div>


      </div>
      {/* -----------------end the main content part------------- */}

      {/* -----------------------quize start-------------------- */}
      <div className="w-full md:w-2/5 mt-5 ">


        <div className="relative bg-opacity-40 bg-blur backdrop-blur-lg p-4 rounded-lg shadow-glow transform hover:scale-105 transition-transform duration-300 animate-pulse border border-sky-500">
          <div className="flex items-center justify-center gap-2 animate-bounce ">
            <p className="text-center text-3xl text-orange-400 ">Quiz</p>
            <Icon icon="twemoji:party-popper" className="text-5xl " />
          </div>
          <p className="text-center text-3xl text-red-500 md:text-white font-bold mb-4">
            Question : {lesson.quiz.question}
          </p>
          <form className="mt-4 text-xl font-Sec">
            {lesson?.quiz?.options.map((item, i) => (
              <label
                key={i}
                className="block relative mb-4 text-green-500 bg-transparent p-4 rounded-lg shadow-lg hover:bg-yellow-100 transition-colors duration-300 border "
              >
                <input
                  type="radio"
                  name="option"
                  value={item}
                  onChange={handleOptionChange}
                  disabled={disable}
                  className="mr-2 font-bold cursor-pointer"
                />
                {item}
              </label>
            ))}
          </form>
        </div>











      </div>
      {/* --------------end the quize */}



      {
        right &&

        <div>

          <div className="absolute left-0  w-96 h-96">

            <Lottie animationData={succesfully} loop={false} />

          </div>

          <div className="absolute right-0  w-96 h-96">

            <Lottie animationData={succesfully} loop={false} />

          </div>
        </div>

      }




    </div>
  );
};

export default LessOnSlider;
