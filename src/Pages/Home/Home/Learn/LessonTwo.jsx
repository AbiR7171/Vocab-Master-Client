// import React, { useEffect, useState } from "react";
// import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Typewriter from "typewriter-effect";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import Swal from "sweetalert2";


const LessonTwo = () => {
  const navigate = useNavigate();
  const [lessons, setLesson] = useState([]);
  const [level, setLevel] = useState(0);
  const [disable, setDisable] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [number, setNumber] = useState(0)

  console.log(selectedOption);
// const LessonTwo = () => {
//   const navigate = useNavigate();
//   const [lessons, setLesson] = useState([]);
//   const [level, setLevel] = useState(0);
//   const [disable, setDisable] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [number, setNumber]=useState(0)
  
//   console.log(selectedOption);



//   const handleOptionChange = (event) => {

//     setSelectedOption(event.target.value);

    if (event.target.value == `d`) {
      setNumber(number + 1)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Write Answer',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong Answer',

      })
    }
  };


  console.log(level);
  console.log(lessons);
//     if(event.target.value == `d`){
//       setNumber(number + 1)
//       Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Write Answer',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }
//     else{
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Wrong Answer',
        
//       })
//     }
//   };

 
//   console.log(level);
//   console.log(lessons);

//   useEffect(() => {
//     fetch("https://vocab-master-server-new.vercel.app/quiz")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const levelONeData = data.filter((d) => d.level == "2.2");
//         setLesson(levelONeData);
//       });
//   }, []);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleLevel = () => {
//     setLevel(level + 1);
//     setDisable(true);
//     localStorage.setItem("level", level + 1);
//     Swal.fire({
//       position: "top-center",
//       icon: "success",
//       title: "Completed",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };


//    const handleComplete = ()=> {
             
//                 setLevel(1) 
//                 setDisable(true)
//                 localStorage.setItem("level", level + 1)
//                 Swal.fire({
//                   position: 'top-center',
//                   icon: 'success',
//                   title: `Congratulations You Completed Your First Lesson <br> You Got ${number} out of 10`,
//                   showConfirmButton: false,
//                   timer: 1500
//                 })
//    }

//   return (
//     <div className=" bg-zinc-200 h-full ">
//      <div className="bg-black w-full h-20  bg-opacity-70">
//      <button
//         onClick={handleBack}
//         className="text-red-400 text-3xl absolute top-0  ms-4 mt-6"
//       >
//         <Icon icon="solar:round-arrow-left-bold" />
//       </button> 
//         <div className="flex items-center justify-end container mx-auto">
//           <Icon icon="material-symbols:diamond" className="text-3xl text-white mt-5" /> <p className="text-2xl mt-3 text-red-400">({number})</p>
//         </div>
//       </div>

//       <div>
//         <p className="text-center mt-20 text-2xl font-primary">
//           Welcome to Your First Vocabulary Lesson
//         </p>
//         <div className="mt-20">
//           <Swiper
//             cssMode={true}
//             navigation={true}
//             pagination={true}
//             mousewheel={true}
//             keyboard={true}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper"
//           >
//             {lessons.map((lesson) => {
//               return (
//                 <SwiperSlide>
//                   <div className="container mx-auto">
//                     <p className="text-center text-2xl  ">
//                       এগুলোর মধ্যে কোনটি{" "}
//                       <span className="font-bold text-red-700">
//                         {lesson.word}
//                       </span>
//                     </p>

//                     <div className="grid grid-cols-4 gap-3 mt-10 mb-10 font-Sec">
//                       <div className="card  bg-base-100 shadow-xl p-4 ">
//                         <img
//                           src={lesson.option.option1.image}
//                           className="w-full h-52 rounded-lg"
//                           alt=""
//                         />
//                         <p className="text-red-600 text-center mt-3 text-2xl">
//                           {lesson.option.option1.word}
//                         </p>
//                       </div>

//                       <div className="card  bg-base-100 shadow-xl p-4">
//                         <img
//                           src={lesson.option.option2.image}
//                           className=" w-full h-52 rounded-lg"
//                           alt=""
//                         />
//                         <p className="text-red-600 text-center mt-3 text-2xl">
//                           {lesson.option.option2.word}
//                         </p>
//                       </div>

//                       <div className="card  bg-base-100 shadow-xl p-4">
//                         <img
//                           src={lesson.option.option3.image}
//                           className=" w-full h-52 rounded-lg"
//                           alt=""
//                         />
//                         <p className="text-red-600 text-center mt-3 text-2xl">
//                           {lesson.option.option3.word}
//                         </p>
//                       </div>

//                       <div className="card  bg-base-100 shadow-xl p-4">
//                         <img
//                           src={lesson.image}
//                           className=" w-full h-52 rounded-lg"
//                           alt=""
//                         />
//                         <p className="text-red-600 text-center mt-3 text-2xl">
//                           {lesson.Meaning}
//                         </p>
//                       </div>
//                     </div> 
//                     <p className="font-Sec text-2xl">Select The correct answer</p>
//                     <form  className="flex gap-2 mt-4 mb-10 text-2xl font-Sec"> 

//                       <label className="block mb-2">
//                         <input
//                           type="radio"
//                           name="option"
//                           value="a"
//                           checked={selectedOption === `a`}
//                           onChange={handleOptionChange}
//                           className="mr-2"
//                         />
//                         Option A
//                       </label>
//                       <label className="block mb-2">
//                         <input
//                           type="radio"
//                           name="option"
//                           value="b"
//                           checked={selectedOption === `b` }
//                           onChange={handleOptionChange}
//                           className="mr-2"
//                         />
//                         Option B
//                       </label>
//                       <label className="block mb-2">
//                         <input
//                           type="radio"
//                           name="option"
//                           value="c"
//                           checked={selectedOption === `c`}
//                           onChange={handleOptionChange}
//                           className="mr-2"
//                         />
//                         Option C
//                       </label>
//                       <label className="block mb-2">
//                         <input
//                           type="radio"
//                           name="option"
//                           value="d"
//                           checked={selectedOption === `d`}
//                           onChange={handleOptionChange}
//                           className="mr-2"
//                         />
//                         Option D
//                       </label>
//                     </form>
//                   </div>
//                 </SwiperSlide> 
//               );
//             })}

//              <SwiperSlide> <div className="w-full flex justify-center items-center py-52">
//                            <button disabled={disable} onClick={handleComplete} className="bg-red-600 btn px-20 text-white">Complete</button>
//               </div></SwiperSlide>
       
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LessonTwo;
