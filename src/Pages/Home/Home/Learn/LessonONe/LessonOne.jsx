import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Typewriter from "typewriter-effect";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Swal from "sweetalert2";
import LessOnSlider from "../LessOnSlider";
import useUsers from "../../../../../hooks/useUsers";
import axios from "axios";
import useWords from "../../../../../hooks/useWords";

const LessonOne = () => {
  const navigate = useNavigate();
  const [lessons, setLesson] = useState([]);
  const [level, setLevel] = useState(0);
  const [disable, setDisable] = useState(false);

  const [userInfo] = useUsers();
  console.log(userInfo);

  const [number, setNumber] = useState(0);

  const [words] = useWords();

  // console.log(words);

  const level1 = words?.filter((l) => l.level == 1.1);

  // console.log(level1);
  // console.log(lessons);

  // useEffect(()=>{

  //     fetch('https://vocab-master-server.onrender.com/quiz')
  //     .then(res => res.json())
  //     .then(data =>{
  //       console.log(data);
  //       const level1 = data.filter(d => d.level === 1.1)
  //       console.log(level1);
  //       setLesson(level1)
  //     })
  // },[])

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

    axios.patch(`https://vocab-master-server.onrender.com/singleUser/users/level?email=${userInfo[0]?.email}`, {
      season: 1.2
    })
      .then(res => {

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

  const backGroundStyle = {
    backgroundImage: `url(${level1[0]?.categoryImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh"
  };

  return (
    <div style={backGroundStyle} className=" min-h-[100vh] bg-black bg-opacity-30">
      <div className=" w-full h-screen ">
        <button
          onClick={handleBack}
          className="text-red-400 text-3xl absolute top-0  ms-4 mt-6"
        >
          <Icon icon="solar:round-arrow-left-bold" />
        </button>

        <div className="flex justify-between pe-8 py-4 bg-black bg-opacity-80">
          <div></div>
          {/* <p className="text-center text-lg ms-5 md:text-4xl font-primary text-white">
            Welcome to Your  Vocabulary Lesson
          </p> */}

          <div className="text-center text-lg md:text-4xl font-primary ms-5 text-white">
            <Typewriter
              options={{
                strings: "Welcome to Your  Vocabulary Lesson",
                autoStart: true,
                loop: true,
                cursor: "|",
                typeSpeed: 50,
                deleteSpeed: 10,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).deleteAll().typeString("").start();
              }}
            />
          </div>

          <div className="flex items-center justify-center container bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   w-32 h-12  rounded-3xl  bg-opacity-50">
            <Icon
              icon="basil:diamond-solid"
              className="text-4xl text-green-900"
            />{" "}
            <p className="text-4xl  text-red-900">{userInfo[0]?.diamond}</p>
          </div>
        </div>

        <div className="bg-black bg-opacity-80">
          <div className="h-[calc(100vh-80px)] pt-5 md:pt-20">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={false}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {level1?.map((lesson, index) => (
                <SwiperSlide key={lesson._id}>
                  <LessOnSlider
                    lesson={lesson}
                    setNumber={setNumber}
                    number={number}
                    index={index}
                  ></LessOnSlider>
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="Container mx-auto px-96 h-full mt-40 px-auto">
                  <button
                    onClick={handleComplete}
                    disabled={disable}
                    className="bg-red-800  px-32 p-4 text-white rounded  ms-40"
                  >
                    Completed
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonOne;
