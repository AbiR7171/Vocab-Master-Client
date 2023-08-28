import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { SwiperSlide } from 'swiper/react';
import Particles from '../../../../Paricels/Particels';


const LessOnSlider = ({lesson,setNumber, number}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [disable, setDisable] = useState(false);
    console.log(selectedOption);



    
  const handleOptionChange = (event) => {

    setSelectedOption(event.target.value);
    setDisable(true)

    if(event.target.value == `${lesson.Meaning}`){
      setNumber(number + 1)
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Write Answer',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong Answer',
        
      })
    }
  };
    return (
  
         <div className="container mx-auto ">
          <p className="text-center text-2xl  ">
            এগুলোর মধ্যে কোনটি{" "}
            <span className="font-bold text-red-700">
              {lesson.word}
            </span>
          </p>

          <div className="grid grid-cols-4 gap-3 mt-10 mb-10 font-Sec">
            <div className="card shadow-xl p-4 ">
              <img
                src={lesson.option.option1.image}
                className="w-full h-52 rounded-lg"
                alt=""
              />
              <p className="text-red-600 text-center mt-3 text-2xl">
                {lesson.option.option1.word}
              </p>
            </div>

            <div className="card   shadow-xl p-4">
              <img
                src={lesson.option.option2.image}
                className=" w-full h-52 rounded-lg"
                alt=""
              />
              <p className="text-red-600 text-center mt-3 text-2xl">
                {lesson.option.option2.word}
              </p>
            </div>

            <div className="card  bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 shadow-xl p-4">
              <img
                src={lesson.option.option3.image}
                className=" w-full h-52 rounded-lg"
                alt=""
              />
              <p className="text-red-600 text-center mt-3 text-2xl">
                {lesson.option.option3.word}
              </p>
            </div>

            <div
             className="card  bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 shadow-xl p-4">
              <img
                src={lesson.image}
                className=" w-full h-52 rounded-lg"
                alt=""
              />
              <p className="text-red-600 text-center mt-3 text-2xl">
                {lesson.Meaning}
              </p>
            </div>
          </div> 
          <p className="font-Sec text-2xl">Select The correct answer</p>
          <form  className="flex gap-2 mt-4 mb-10 text-2xl font-Sec"> 

            <label className="block mb-2">
              <input
                type="radio"
                name="option"
                value={lesson.option.option1.word}
                checked={selectedOption === `$`}
                onChange={handleOptionChange}
                disabled={disable}
                className="mr-2"
              />
              Option A
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="option"
                value={lesson.option.option2.word}
                checked={selectedOption === `b` }
                disabled={disable}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Option B
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="option"
                value={lesson.option.option3.word}
                checked={selectedOption === `c`}
                disabled={disable}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Option C
            </label>
            <label  className="block mb-2">
              <input
                type="radio"
                name="option"
                value={lesson.Meaning}
                checked={selectedOption === `d`}
                disabled={disable}
                onChange={handleOptionChange}
               
                className="mr-2"
              />
              Option D
            </label>
          </form>
        </div>

    
    );
};

export default LessOnSlider;