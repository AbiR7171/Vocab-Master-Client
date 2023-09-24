// import React from "react";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import { Icon } from "@iconify/react";

// const QuizSlider = ({ lesson, marks, setMarks }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [disable, setDisable] = useState(false);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     setDisable(true);

//     if (event.target.value == `${lesson.correct_answer}`) {
//       setMarks(marks + 1);

//       Swal.fire({
//         position: "top-center",
//         icon: "success",
//         title: "Awesome Write Answer",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops... <br> Wrong Answer",
//         text: ` Write Answer is: ${lesson.correct_answer} `,
//       });
//     }
//   };
//   return (
//     <div className="bg-[#501543] rounded-lg text-white p-6">
//      <div className="rounded-lg bg-gray-100 p-2 neumorph-1 text-center font-bold text-gray-800 mt-8">
//             <div className="bg-white p-5">
//               {lesson.length > 0 && lesson.question}
//             </div>
//           </div>

//     <p className="mt-3 text-yellow-600">Please Select the Correct Answer</p>

//     <form className="flex flex-col mt-4 mb-10 text-2xl font-Sec">
//       {lesson.options.map((option, index) => (
//         <label key={index} className="block mb-3 relative cursor-pointer">
//           <div className="bg-blue-700 p-1 transform rotate-45 rounded-md h-10 w-10 absolute right-0 top-0 shadow-md">
//             <p className="transform -rotate-45 text-white font-bold">+10</p>
//           </div>
//           <input
//             type="radio"
//             name="option"
//             value={option}
//             checked={selectedOption === option}
//             onChange={handleOptionChange}
//             disabled={disable}
//             className="opacity-0 absolute left-0 top-0 cursor-pointer"
//           />
//           <div className="rounded-lg font-bold flex p-2 text-black">
//             <div className="p-3 rounded-lg">{String.fromCharCode(65 + index)}</div>
//             <div className="flex items-center pl-6">{option}</div>
//           </div>
//         </label>
//       ))}
//     </form>
//   </div>
// );
// };

// export default QuizSlider;

import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";

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
    <div className="px-52 mt-6 h-[100vh] ">
      <p className="text-red-600 text-3xl">Question :{lesson.question}</p>

      <p className="mt-3 text-yellow-600">Please Select The Write Answer</p>

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
