import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Icon } from '@iconify/react';

const QuizSlider = ({ lesson, marks, setMarks }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [disable, setDisable] = useState(false);



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setDisable(true);

    if (event.target.value == `${lesson.correct_answer}`) {

      setMarks(marks + 1);

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
        text: ` Write Answer is: ${lesson.correct_answer} `,
      });
    }
  };
  return (
    <div className='px-52 mt-6 h-[100vh] '>



      <p className="text-red-600 text-3xl">Question :{lesson.question}</p>
      <p className='mt-3 text-yellow-600'>Please Select The Write Answer</p>


      <form className="flex gap-4 mt-4 mb-10 text-2xl font-Sec">

        <label className="block mb-2 text-green-500">
          <input
            type="radio"
            name="option"
            value={lesson.options[0]}
            checked={selectedOption === `$`}
            onChange={handleOptionChange}
            disabled={disable}
            className="mr-2"
          />
          {lesson.options[0]}
        </label>
        <label className="block mb-2 text-green-500">
          <input
            type="radio"
            name="option"
            value={lesson.options[1]}
            checked={selectedOption === `b`}
            disabled={disable}
            onChange={handleOptionChange}
            className="mr-2"
          />
          {lesson.options[1]}
        </label>
        <label className="block mb-2 text-green-500">
          <input
            type="radio"
            name="option"
            value={lesson.options[2]}
            checked={selectedOption === `c`}
            disabled={disable}
            onChange={handleOptionChange}
            className="mr-2"
          />
          {lesson.options[2]}
        </label>
        <label className="block mb-2 text-green-500">
          <input
            type="radio"
            name="option"
            value={lesson.options[3]}
            checked={selectedOption === `c`}
            disabled={disable}
            onChange={handleOptionChange}
            className="mr-2"
          />
          {lesson.options[3]}
        </label>

      </form>


    </div>
  );
};

export default QuizSlider;