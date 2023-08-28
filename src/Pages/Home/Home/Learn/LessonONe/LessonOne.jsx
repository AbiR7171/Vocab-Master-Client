import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Swal from "sweetalert2";
import LessOnSlider from "../LessOnSlider";


const LessonOne = () => {
  const navigate = useNavigate();
  const [lessons, setLesson] = useState([]);
  const [level, setLevel] = useState(0);

 
  const [number, setNumber]=useState(0)
  
  // console.log(selectedOption);

 


 
  console.log(level);
  console.log(lessons);

  useEffect(() => {
    fetch("https://vocab-master-server.vercel.app/quiz")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const levelONeData = data.filter((d) => d.level == "2.1");
        setLesson(levelONeData);
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


   const handleComplete = ()=> {
             
                setLevel(1) 
                setDisable(true)
                localStorage.setItem("level", level + 1)
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: `Congratulations You Completed Your First Lesson <br> You Got ${number} out of 10`,
                  showConfirmButton: false,
                  timer: 1500
                })
   }

  return (
    <div className=" bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 text-white h-[100vh] bg-Back ">
     <div className=" w-full h-20 ">
     <button
        onClick={handleBack}
        className="text-red-400 text-3xl absolute top-0  ms-4 mt-6"
      >
        <Icon icon="solar:round-arrow-left-bold" />
      </button> 
        <div className="flex items-center justify-end container mx-auto">
          <Icon icon="material-symbols:diamond" className="text-3xl text-white mt-5" /> <p className="text-2xl mt-3 text-red-400">({number})</p>
        </div>
      </div>

      <div>
        <p className="text-center  text-2xl font-primary">
          Welcome to Your First Vocabulary Lesson
        </p>
        <div className="mt-20">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {
              lessons.map(lesson => 
                <SwiperSlide key={lesson._id}>
                   <LessOnSlider lesson={lesson} setNumber={setNumber} number={number}></LessOnSlider>
                </SwiperSlide>
                )
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LessonOne;
