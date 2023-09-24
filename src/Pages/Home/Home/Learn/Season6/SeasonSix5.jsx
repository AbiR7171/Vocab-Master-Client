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


const SeasonSix5 = () => {
  const navigate = useNavigate();
  const [lessons, setLesson] = useState([]);
//   const [level, setLevel] = useState(0);
  const [disable, setDisable] = useState(false);
  

  const [userInfo] = useUsers()
  console.log(userInfo);

  const [number, setNumber] = useState(0)

  // const lessonsss = useLoaderData()

  // console.log(lessonsss);


  
  // console.log(level1);
  // console.log(selectedOption); 

  const[words]=useWords();

  console.log(words);


  const level = words?.filter(l => l.level == 6.1)






//   console.log(level1);
  // console.log(lessons);

  // useEffect(()=>{

  //     fetch('https://vocab-master-server-new.vercel.app/quiz')
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


  const handleComplete = () => {



      axios.patch(`https://vocab-master-server-new.vercel.app/singleUser/users/level?email=${userInfo[0]?.email}`, {
        season : 6.6
      })
      .then(res =>{
               
             console.log(res);
             if(res.data.modifiedCount > 0){

                 setDisable(true)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                         title: `Congratulations You Completed Your First Lesson`,
                          showConfirmButton: false,
                         timer: 1500
                 })
             }
      })

   
   
    
  }



  const backGroundStyle = {
    backgroundImage: `url(${level[0]?.categoryImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: "100vw",

  }

  return (
    <div style={backGroundStyle} className=" h-[100vh] bg-black bg-opacity-60">
      <div className=" w-full h-20 ">
        <button
          onClick={handleBack}
          className="text-red-400 text-3xl absolute top-0  ms-4 mt-6"
        >
          <Icon icon="solar:round-arrow-left-bold" />
        </button>

        <div className="flex justify-end  pe-8 bg-black bg-opacity-80 p-2">
          <div className="flex items-center justify-center container bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   w-32 h-12  rounded-3xl  bg-opacity-50">
            <Icon icon="basil:diamond-solid" className="text-4xl text-green-900" /> <p className="text-4xl  text-red-900">{userInfo[0]?.diamond}</p>
          </div>


        </div>

        <div className="bg-black bg-opacity-80">
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
          <div className="h-[calc(100vh-104px)] pt-5 md:pt-20">
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
                level?.map((lesson, index) =>
                  <SwiperSlide key={lesson._id}>
                    <LessOnSlider lesson={lesson} setNumber={setNumber} number={number} index={index} ></LessOnSlider>
                  </SwiperSlide>
                )
              }
              <SwiperSlide>
                      <div className="Container mx-auto px-96 h-full mt-40 px-auto">
                          <button onClick={handleComplete} disabled={disable} className="bg-red-800  px-32 p-4 text-white rounded  ms-40">Completed</button>
                      </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonSix5;
