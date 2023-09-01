import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { SwiperSlide } from "swiper/react";
import Particles from "../../../../Paricels/Particels";
import { Icon } from '@iconify/react';
import useUsers from "../../../../hooks/useUsers";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Authentication/Provider/AuthProvider";

const LessOnSlider = ({ lesson,index }) => {
  const {user}=useContext(AuthContext)
  const [selectedOption, setSelectedOption] = useState(null);
  const [disable, setDisable] = useState(false);
  const[userInfo, refetch]=useUsers()
  console.log(userInfo);
  console.log(selectedOption);

  console.log(lesson); 

  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setDisable(true);

    if (event.target.value == `${lesson.quiz.correctAnswer}`) {



      axios.patch(`https://vocab-master-server.vercel.app/singleUser/users?email=${user.email}`, {
        diamond: userInfo[0].diamond
      })
      .then(data => {
            console.log(data);
            if(data.data.matchedCount > 0){
              refetch()
            }
           
      })
   

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

  return (
    <div className="container mx-auto px-40 font-Sec  space-y-3">
      {/* <img src={lesson.categoryImage} alt="" /> */}
      <div className="flex justify-between items-center text-gray-500">
        <p className="text-2xl font-bold">Word No. {index + 1}</p>
        <p className="text-2xl font-bold">Level: {lesson.level}</p>
        <p className="text-2xl font-bold ">
          Defficulty level:{" "}
          <span className="uppercase text-1xl ">{lesson.difficultyLevel}</span>
        </p>
      </div>

      <p className="text-4xl mt-4 font-bold text-red-600 ">
        Word: {lesson.word}
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

      <p className="text-2xl text-yellow-300 font-serif">Definition: {lesson.definition}</p>



      <div className="flex gap-2 items-center text-gray-300 ">
          <p className="text-2xl font-semibold -mt-14 ">Examples :</p>

          <ul className=" font-bold  ">
            <li> 1.{lesson.examples[0]}</li>
            <li className="ms-2">2.{lesson.examples[1]}</li>
            <li className="ms-2">2.{lesson.examples[2]}</li>
          </ul>
        </div>


      <div className="flex items-center justify-center gap-2 ">
      <p className="text-center text-3xl text-orange-400 mt-10">Quiz</p>
      <Icon icon="twemoji:party-popper" className="text-5xl mt-10" />
      </div>


      <p className="text-center text-2xl text-red-600 font-bold">Question : {lesson.quiz.question}</p>


 
      <p className="font-Sec text-2xl text-yellow-300">Select The correct answer</p>
      <form  className="flex gap-4 mt-4 mb-10 text-2xl font-Sec"> 

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
                checked={selectedOption === `b` }
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
  );
};

export default LessOnSlider;
