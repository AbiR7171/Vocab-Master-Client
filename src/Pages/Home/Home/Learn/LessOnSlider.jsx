import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { SwiperSlide } from "swiper/react";
import Particles from "../../../../Paricels/Particels";
import { Icon } from "@iconify/react";
import useUsers from "../../../../hooks/useUsers";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Authentication/Provider/AuthProvider";
import SpeechRecognitionComponent from "../../../../components/Features/SpeechRecognitionComponent";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import succesfully from "../../../../assets/LottieAnimation/succesfully.json";
import rights from "../../../../assets/LottieAnimation/right.json";
import left from "../../../../assets/LottieAnimation/left.json";
import middle from "../../../../assets/LottieAnimation/middle.json";
import Lottie from "lottie-react";

const LessOnSlider = ({ lesson, index }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disable, setDisable] = useState(false);
  const [userInfo, refetch] = useUsers();
  const [right, setRight] = useState(false);
  // console.log(userInfo);
  // console.log(selectedOption);

  // console.log(lesson);

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   console.log("the select value:", event.target.value)
  //   setDisable(true);

  //   if (event.target.value === `${lesson.quiz.correctAnswer}`) {
  //     console.log('right answer')
  //     axios
  //       .patch(`https://vocab-master-server.onrender.com/singleUser/users?email=${user.email}`, {
  //         diamond: userInfo[0].diamond,
  //       })
  //       .then((data) => {
  //         if (data.data.matchedCount > 0) {
  //           refetch();
  //         }
  //       });

  //     Swal.fire({
  //       position: 'top-center',
  //       icon: 'success',
  //       title: 'Awesome! Correct Answer',
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   } else {
  //     console.log('wrong answer')
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops... Wrong Answer',
  //       html: `Correct Answer is: ${lesson.quiz.correctAnswer}`,
  //     });
  //   }
  // };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
            setRight(true);
          }
        });

      Swal.fire({
        position: "top-center",
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

  //previous code--------------
  // if (!isSpeaking) {
  //   const utterance = new SpeechSynthesisUtterance(content);
  //   speechSynthesis.speak(utterance);
  //   setIsSpeaking(true);
  // } else {
  //   speechSynthesis.cancel();
  //   setIsSpeaking(false);
  // }

  // useEffect(() => {
  //   if (isSpeaking === true) {
  //     const utterances = paragraphs.map(content => {
  //       const utterance = new SpeechSynthesisUtterance(content);
  //       return utterance;
  //     });

  //     utterances.forEach(utterance => speechSynthesis.speak(utterance));
  //     setIsSpeaking(true);
  //   } else {
  //     speechSynthesis.cancel();
  //     setIsSpeaking(false);
  //   }
  // }, [isSpeaking])
  //-------------------------------------------
  return (
    <div className="container px-20 lg:flex justify-between items-center gap-20 font-Sec  space-y-3 ">
      {/* <img src={lesson.categoryImage} alt="" /> */}

      {/*--------------- main content part start--------------- */}
      <div className="w-full mg:w-2/3 ">
        <div className="flex justify-between items-center text-gray-500">
          <p className="text-lg md:text-2xl font-bold">Word No. {index + 1}</p>
          <p className="text-lg md:text-2xl font-bold">Level: {lesson.level}</p>

          <p className="text-lg md:text-2xl font-bold ">
            Defficulty level:
            <span className="uppercase text-1xl ">
              {lesson?.difficultyLevel}
            </span>
          </p>
        </div>

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

        <p className="text-4xl mt-4 font-bold text-red-600 ">
          Word: {lesson?.word}
        </p>

        <div className="flex justify-between  items-center text-green-600 ">
          <div className="flex items-center">
            <p className="text-2xl font-semibold ">Meaning :</p>

            <ul className="flex items-center mt-2  font-bold ">
              <li>{lesson.meaning.originalBangla[0]},</li>
              <li className="ms-2">{lesson.meaning.originalBangla[1]}</li>
            </ul>
          </div>

          <div className="flex items-center font-serif text-gray-300">
            <p className="text-2xl font-semibold ">Part Of Speech :</p>

            <p className="text-2xl ms-2">{lesson.partsOfSpeech}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center text-gray-300">
            <p className="text-2xl font-semibold ">Antonyms :</p>

            <ul className="flex items-center   font-bold text-2xl ">
              <li> 1.{lesson.antonyms[0]}</li>
              <li className="ms-2">2.{lesson.antonyms[1]}</li>
            </ul>
          </div>

          <div className="flex items-center text-gray-300">
            <p className="text-2xl font-semibold ">Synonyms :</p>

            <ul className="flex items-center   font-bold text-2xl ">
              <li> 1.{lesson.synonyms[0]}</li>
              <li className="ms-2">2.{lesson.synonyms[1]}</li>
            </ul>
          </div>
        </div>

        <p className="text-2xl text-yellow-300 font-serif">
          Definition: {lesson.definition}
        </p>

        <div className="flex gap-2 items-center text-gray-300 ">
          <p className="text-2xl font-semibold -mt-14 ">Examples :</p>

          <ul className=" font-bold  ">
            <li className="ms-2">1.{lesson.examples[0]}</li>
            <li className="ms-2">2.{lesson.examples[1]}</li>
            <li className="ms-2">3.{lesson.examples[2]}</li>
          </ul>
        </div>
      </div>
      {/* -----------------end the main content part------------- */}

      {/* -----------------------quize start-------------------- */}
      <div className="w-full mg-w-1/3">
        <div className="flex items-center justify-center gap-2 ">
          <p className="text-center text-3xl text-orange-400 ">Quiz</p>
          <Icon icon="twemoji:party-popper" className="text-5xl " />
        </div>

        <p className="text-center text-2xl text-red-600 font-bold">
          Question : {lesson.quiz.question}
        </p>

        <p className="font-Sec text-2xl text-yellow-300">
          Select The correct answer
        </p>
        <form className=" gap-4 mt-4 mb-10 text-2xl font-Sec">
          <label className="block mb-2 text-green-500">
            <input
              type="radio"
              name="option"
              value={lesson.quiz.options[0]}
              checked={selectedOption === `$`}
              onChange={handleOptionChange}
              disabled={disable}
              className="mr-2"
            />
            {lesson.quiz.options[0]}
          </label>
          <label className="block mb-2 text-green-500">
            <input
              type="radio"
              name="option"
              value={lesson.quiz.options[1]}
              checked={selectedOption === `b`}
              disabled={disable}
              onChange={handleOptionChange}
              className="mr-2"
            />
            {lesson.quiz.options[1]}
          </label>
          <label className="block mb-2 text-green-500">
            <input
              type="radio"
              name="option"
              value={lesson.quiz.options[2]}
              checked={selectedOption === `c`}
              disabled={disable}
              onChange={handleOptionChange}
              className="mr-2"
            />
            {lesson.quiz.options[2]}
          </label>
        </form>
      </div>
      {/* --------------end the quize */}

      {right && (
        <div>
          <div className="absolute left-0  w-96 h-96">
            <Lottie animationData={succesfully} loop={false} />
          </div>

          <div className="absolute right-0  w-96 h-96">
            <Lottie animationData={succesfully} loop={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LessOnSlider;