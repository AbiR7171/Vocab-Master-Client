// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import QuizSlider from "./QuizSlider";
// import { Icon } from "@iconify/react";
// import useUsers from "../../../../../hooks/useUsers";
// import Swal from "sweetalert2";

// const SeasonOneQuiz = () => {
//   const [quizs, setQuizs] = useState([]);
//   const [marks, setMarks] = useState(0);
//   const [userInfo] = useUsers();

//   useEffect(() => {
//     axios
//       .get("https://vocab-master-server.onrender.com/seasonQuiz")
//       .then((res) => {
//         console.log(res.data);
//         setQuizs(res.data);
//       });
//   }, []);

//   const handleCompleted = () => {
//     axios
//       .put(
//         `https://vocab-master-server.onrender.com/singleUser/firstSeasonMark/${userInfo[0].email}`,
//         {
//           first: marks,
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.modifiedCount > 0) {
//           Swal.fire({
//             position: "top-center",
//             icon: "success",
//             title: `Congratulations! You Completed Your First Quiz`,
//             html: `You Got ${marks}`,
//             showConfirmButton: false,
//             timer: 1500,
//             customClass: {
//               title: "text-white",
//               popup: "bg-red-700",
//             },
//           });
//         }
//       });
//   };

//   return (
//     <main
//       style={{
//         backgroundColor: "#4158D0",
//         backgroundImage:
//           "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
//       }}
//       className="flex h-screen items-center justify-center bg-gray-100"
//     >
//       <div className="overflow-hidden bg-transparent flex-none container relative shadow-lg rounded-lg px-12 py-6 bg-[#501543]">
//         <img
//           src="/public/img/abstract.svg"
//           alt=""
//           className="absolute -top-40 sm:-top-10 left-0 object-none sm:w-auto w-[5000px]"
//         />
//         <div className="relative z-20">
//           <div className="text-right text-white">
//             <p className="text-sm leading-3">Score</p>
//             <p className="font-bold">{marks}</p>
//           </div>
//           <div className="bg-white shadow-lg p-1 rounded-full w-full h-5 mt-4">
//             <div className="bg-blue-700 rounded-full w-11/12 h-full"></div>
//           </div>
        
//           <div className="mt-8">
//             <Swiper
//               cssMode={true}
//               navigation={true}
//               pagination={true}
//               mousewheel={true}
//               keyboard={true}
//               modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//               className="mySwiper"
//             >
//               {" "}
//               {quizs?.map((lesson, index) => (
//                 <SwiperSlide key={lesson._id}>
//                   <QuizSlider
//                     lesson={lesson}
//                     marks={marks}
//                     setMarks={setMarks}
//                   />
//                 </SwiperSlide>
//               ))}
//               <SwiperSlide>
//                 <button
//                   onClick={handleCompleted}
//                   className="btn bg-red-700 border-0 px-20 mt-4"
//                 >
//                   Completed
//                 </button>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           <div className="mt-8 text-center">
//             <div className="h-1 w-12 bg-gray-800 rounded-full mx-auto"></div>
//             <p className="font-bold text-gray-800">2/10</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default SeasonOneQuiz;



import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import QuizSection from "../../../section/QuizSection";
import QuizSlider from "./QuizSlider";
import { Icon } from "@iconify/react";
import useUsers from "../../../../../hooks/useUsers";
import Swal from "sweetalert2";

const SeasonONeQuiz = () => {
  const [quizs, setQuizs] = useState();
  const [marks, setMarks] = useState(0);
  const [userInfo] = useUsers();

  useEffect(() => {
    axios
      .get("https://vocab-master-server.onrender.com/seasonQuiz")
      .then((res) => {
        console.log(res.data);
        setQuizs(res.data);
      });
  }, []);

  const handleCompleted = () => {
    axios
      .put(
        `https://vocab-master-server.onrender.com/singleUser/firstSeasonMark/${userInfo[0].email}`,
        {
          first: marks,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Congratulations You Completed Your First Quiz <br>  You Got ${marks}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full p-2">
      <div className="flex justify-between px-20 mt-4">
        <p className="text-4xl mb-20">WelCome To YOur First Quiz Test</p>

        <div className="flex items-center justify-center container bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   w-32 h-12  rounded-3xl  bg-opacity-50">
          <Icon
            icon="basil:diamond-solid"
            className="text-4xl text-green-900"
          />{" "}
          <p className="text-4xl  text-red-900">{marks}</p>
        </div>

        <div className="flex items-center justify-center container bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   w-32 h-12  rounded-3xl  bg-opacity-50">
          <Icon
            icon="basil:diamond-solid"
            className="text-4xl text-green-900"
          />{" "}
          <p className="text-4xl  text-red-900">{marks}</p>
        </div>
      </div>

      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {quizs?.map((lesson, index) => (
            <SwiperSlide key={lesson._id}>
              <QuizSlider lesson={lesson} marks={marks} setMarks={setMarks} />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <button
              onClick={handleCompleted}
              className="btn  bg-red-700  border-0 px-20 mt-52 ms-[600px]"
            >
              Completed
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SeasonONeQuiz;
