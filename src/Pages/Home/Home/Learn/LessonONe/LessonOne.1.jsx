import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Swal from "sweetalert2";
import useUsers from "../../../../../hooks/useUsers";
import axios from "axios";
import useWords from "../../../../../hooks/useWords";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaVolumeUp } from "react-icons/fa";

export const LessonOne = () => {
  const navigate = useNavigate();
  const [lessons, setLesson] = useState([]);
  const [level, setLevel] = useState(0);
  const [disable, setDisable] = useState(false);
  const [canClick, setCanClick] = useState(true);
  const itemsRef = useRef([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [score, setScore] = useState(0);

  const [userInfo] = useUsers();
  console.log(userInfo);

  const [number, setNumber] = useState(0);

  const [choiceStatus, setChoiceStatus] = useState(Array(4).fill("")); // Initialize an array to track the correctness of choices

  // const lessonsss = useLoaderData()
  // console.log(lessonsss);
  // console.log(level1);
  // console.log(selectedOption);
  const [words] = useWords();

  // console.log(words);
  const level1 = words?.filter((l) => l.level == 1.1);

  // console.log(level1);
  // console.log(lessons);
  useEffect(() => {
    fetch("https://vocab-master-server.onrender.com/quiz")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const level1 = data.filter((d) => d.level === 1.1);
        console.log(level1);
        setLesson(level1);
      });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleLevel = () => {
    setLevel(level + 1);
    setDisable(true);
    localStorage.setItem("level", level + 1);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Completed",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleComplete = () => {
    axios
      .patch(
        `https://vocab-master-server.onrender.com/singleUser/users/level?email=${userInfo[0]?.email}`,
        {
          season: 1.2,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          setDisable(true);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Congratulations You Completed Your First Lesson`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const click = (choice, item, correctAnswer) => {
    const divContainer = itemsRef.current[item];

    if (choice === correctAnswer) {
      setScore((previousScore) => previousScore + 1);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Awesome Write Answer",
        showConfirmButton: false,
        timer: 500,
      }).then(() => {
        // After the Swal notification completes (500ms delay), trigger the right arrow key event
        setTimeout(() => {
          divContainer.classList.add("option-correct");
          divContainer.classList.remove("option-default");

          // Create a custom keyboard event for the right arrow key
          const rightArrowEvent = new KeyboardEvent("keydown", {
            key: "ArrowRight",
            keyCode: 39,
          });

          // Dispatch the custom event on the document object
          document.dispatchEvent(rightArrowEvent);
        }, 500);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops... <br> Wrong Answer",
        text: ` Write Answer is: ${correctAnswer} `,
        timer: 500,
      }).then(() => {
        setTimeout(() => {
          const rightArrowEvent = new KeyboardEvent("keydown", {
            key: "ArrowRight",
            keyCode: 39,
          });

          document.dispatchEvent(rightArrowEvent);
        }, 500);
      });
    }

    console.log(choice, item, divContainer);
  };

  const backGroundStyle = {
    backgroundImage: `url(${level1[0]?.categoryImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  console.log(level1);

  const handleSpeakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  };

  if (level1.length < 1) {
    return (
      <>
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto my-12">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="welcome h-[100vh] w-[100vw]">
      <div className="w-[100vw] h-[20px] bg-transparent rounded mx-auto">
        <ProgressBar
          completed={parseInt((number / level1.length) * 100)}
          maxCompleted={100}
        />
      </div>
      <div
        className=""
        style={{
          backgroundColor: "#4158D0",
          backgroundImage:
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        }}
      >
        <h4 className="text-4xl text-center font-bold">
          Welcome to Your Vocabulary Lesson
        </h4>
        <Swiper
          onSlideChange={(swiper) => {
            setNumber(swiper.activeIndex);
          }}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={false}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper w-auto h-[100vh]"
        >
          {level1?.map((lesson, index) => (
            <SwiperSlide key={lesson._id}>
              <div className="">
                <div className="flex flex-col lg:flex-row gap-4  text-black">
                  <div
                    className="hero h-[100vh] w-[60%] bg-transparent"
                    style={backGroundStyle}
                  >
                    <div className="card w-[90%] bg-black shadow-xl h-[550px]  bg-opacity-70 text-xl">
                      <div className="card-body text-black">
                        <div className="flex justify-between text-2xl text-black font-semibold">
                          <h2 className="">
                            Word No :{" "}
                            <span className="text-white">{index + 1}</span>
                          </h2>
                          <h2>
                            Level:{" "}
                            <span className="text-white">{lesson.level}</span>
                          </h2>
                          <h2>
                            Difficulty Level:{" "}
                            <span className="text-white uppercase">
                              {lesson.difficultyLevel}
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-between  text-black font-semibold">
                          <div className="flex gap-2 justify-center items-center">
                            {" "}
                            <p className="text-2xl text-black font-semibold">
                              Word:{" "}
                              <span className="text-white">{lesson.word}</span>{" "}
                            </p>
                            <button
                              onClick={() => handleSpeakWord(lesson.word)}
                            >
                              {" "}
                              <FaVolumeUp size={20} title="Mute"></FaVolumeUp>
                            </button>
                          </div>
                          <h2 className="text-2xl">
                            Meaning:{" "}
                            <span className="text-white">
                              {lesson.meaning.originalBangla[0]}
                            </span>
                          </h2>{" "}
                          <h2 className="text-2xl">
                            Parts of Speech:{" "}
                            <span className="text-white uppercase">
                              {lesson.partsOfSpeech}
                            </span>
                          </h2>{" "}
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 ">
                          <p className="text-2xl text-black font-semibold ">
                            Definition :
                          </p>
                          <p className="font-bold">{lesson.definition}</p>
                        </div>
                        <div className="flex text-gray-300">
                          <p className="text-2xl font-semibold text-black">
                            Synonyms :
                          </p>

                          <ul className="flex  justify-between lg:gap-[200px] mx-auto  font-bold ">
                            <li> 1.{lesson.synonyms[0]}</li>
                            <li className="ms-2">2.{lesson.synonyms[1]}</li>
                          </ul>
                        </div>
                        <div className="flex text-gray-300">
                          <p className="text-2xl font-semibold mr-8 text-black">
                            antonyms :
                          </p>

                          <ul className="flex  justify-between lg:gap-[200px] mx-auto  font-bold">
                            <li> 1.{lesson.antonyms[0]}</li>
                            <li className="ms-2">2.{lesson.antonyms[1]}</li>
                          </ul>
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 ">
                          <p className="text-2xl text-black font-semibold mt-14 ">
                            Examples :
                          </p>

                          <ul className=" font-bold  mt-4">
                            <li className="ms-2">1.{lesson.examples[0]}</li>
                            <li className="ms-2">2.{lesson.examples[1]}</li>
                            <li className="ms-2">3.{lesson.examples[2]}</li>
                          </ul>
                        </div>
                        <div className="card-actions justify-end"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-transparent w-[40%]">
                    <main className="flex h-screen items-center justify-center">
                      <div className="overflow-hidden bg- flex-none container relative shadow-lg rounded-lg px-12 py-6">
                        <img
                          src="/public/img/abstract.svg"
                          alt=""
                          className="absolute -top-10 left-0 object-none"
                        />

                        <div className="relative z-20">
                          <div className="text-right text-gray-800">
                            <p className="text-sm leading-3">Score </p>
                            <p className="font-bold">{score}</p>
                          </div>

                          <div className="rounded-lg bg-gray-100 p-2 neumorph-1 text-center font-bold text-gray-800 mt-8">
                            <div className="bg-white p-5">
                              {lesson.quiz.question}
                            </div>
                          </div>

                          <div className="mt-8">
                            {/* Sample choices */}

                            {lesson.quiz.options.map((option, i) => (
                              <div
                                key={i}
                                className="neumorph-1   option-default bg-gray-100 p-2 rounded-lg mb-3 relative"
                                ref={(element) => {
                                  if (element) {
                                    itemsRef.current[i] = element;
                                  }
                                }}
                                onClick={() =>
                                  click(option, i, lesson.quiz.correctAnswer)
                                }
                              >
                                <div className="bg-blue-700 p-1 transform rotate-45 rounded-md h-10 w-10 text-white font-bold absolute right-0 top-0 shadow-md">
                                  <p className="transform -rotate-45">+10</p>
                                </div>
                                <div className="rounded-lg font-bold flex p-2">
                                  <div className="p-3 rounded-lg">
                                    {i === 0
                                      ? "A"
                                      : i === 1
                                      ? "B"
                                      : i === 2
                                      ? "C"
                                      : "D"}
                                  </div>

                                  <div className="flex items-center pl-6">
                                    {option}
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/* End of sample choices */}
                          </div>

                          <div className="mt-8 text-center">
                            <div className="h-1 w-12 bg-gray-800 rounded-full mx-auto"></div>
                            <p className="font-bold text-gray-800">
                              {index + 1}/{level1.length}
                            </p>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="w-screen h-screen absolute z-30 bg-opacity-60 flex justify-center items-center">
              <div className="bg-green-700 p-4 text-center text-white w-[50%]">
                <p className="font-bold text-2xl">All Done!</p>
                <p className="my-4 font-bold text-3xl">
                  {parseInt((score / level1.length) * 100)}% score
                </p>

                <div className="flex justify-around">
                  <div
                    className="rounded-full py-1 w-28 border cursor-pointer hover:text-black hover:bg-white"
                    onClick={handleComplete}
                  >
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
