import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useWords from "../hooks/useWords";
import axios from "axios";
import Swal from "sweetalert2";

const ApproveWord = () => {
  const navigate = useNavigate();
  // Initialize form control using react-hook-form
  const { register, handleSubmit, errors, reset } = useForm();

  // State to store quiz options and correct answer
  const [quizOptions, setQuizOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // Define available levels and difficulty levels
  const allLevels = [
    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6,
    2.7, 2.8, 2.9, 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.1, 4.2, 4.3, 4.5,
    4.6, 4.7, 4.8, 4.9,
  ];
  const allDifficulty = ["easy", "medium", "hard"];

  // Function to handle changes in quiz options
  const handleQuizOptionChange = (index, value) => {
    const updatedOptions = [...quizOptions];
    updatedOptions[index] = value;
    setQuizOptions(updatedOptions);
  };

  // Load the requested word data using useLoaderData
  const reqWord = useLoaderData();

  // Destructure the word data
  const {
    _id,
    word,
    category,
    meaning,
    definition,
    phonetics,
    partsOfSpeech,
    synonyms,
    antonyms,
    examples,
  } = reqWord[0];

  // Handle form submission
  const onSubmit = (data) => {
    // Prepare the data to be submitted
    const processedData = {
      level: data.level,
      difficultyLevel: data.difficultyLevel,
      category: data.category,
      categoryImage: data.image,
      word: data.word,
      meaning: {
        originalBangla: [data.bdMeaning],
      },
      definition: data.definition,
      phonetics: data.phonetics,
      partsOfSpeech: data.partsOfSpeech,
      synonyms: [data["synonym 1"], data["synonym 2"], data["synonym 3"]],
      antonyms: [data["antonym 1"], data["antonym 2"], data["antonym 3"]],
      examples: [data["example 1"], data["example 2"], data["example 3"]],
      quiz: {
        question: data.quizQuestion,
        options: [
          quizOptions[0],
          quizOptions[1],
          quizOptions[2],
          quizOptions[3],
        ],
        correctAnswer: data.correctAnswer,
      },
      approved: false,
    };

    // Make a POST request to submit the data
    fetch("https://vocab-master-server-new.vercel.app/user/approveword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Success!", "Word added successfully!", "success");

          // Delete the request word
          axios
            .delete(
              `https://vocab-master-server-new.vercel.app/user/deleteRequestWord/${reqWord[0]._id}`
            )
            .then((data) => {
              console.log(data);
            });
          navigate("/allRouts/wordRequest");
        } else {
          Swal.fire("Oops!", "Something went wrong!", "error");
        }
      });
    reset();
  };

  return (
    <div className="bg-Backs w-full h-full">
      <form className="mb-36 w-full md:w-4/5 ml-auto rounded" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl sm:text-5xl block font-extrabold  text-center my-12 rounded ">
          Review The Requested Word
        </h2>
        <div className="grid gap-6  md:grid-cols-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-md py-4 px-3  mx-6 rounded">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Word
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Word"
              defaultValue={word}
              {...register("word")}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Definition
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              placeholder="definition"
              defaultValue={definition}
              {...register("definition")}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Parts of Speech
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              placeholder="definition"
              defaultValue={partsOfSpeech}
              {...register("partsOfSpeech")}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Word Category
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              placeholder="definition"
              defaultValue={category}
              {...register("category")}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Synonyms('give at least two words')
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Synonym 1"
              defaultValue={synonyms[0]}
              {...register("synonym 1")}
            />
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Synonym 2"
              defaultValue={synonyms[1]}
              {...register("synonym 2")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Synonym 3"
              defaultValue={synonyms[2] || "*unavailable"}
              {...register("synonym 3")}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Antonyms('give at least two words')
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Antonym 1"
              defaultValue={antonyms[0]}
              {...register("antonym 1")}
            />
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Antonym 2"
              defaultValue={antonyms[1]}
              {...register("antonym 2")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Antonym 3"
              defaultValue={antonyms[2] || "*unavailable"}
              {...register("antonym 3")}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Examples('give at least two Examples')
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Examples 1"
              defaultValue={examples[0]}
              {...register("example 1")}
            />
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Examples 2"
              defaultValue={examples[1]}
              {...register("example 2")}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 foc
              us:border-blue-500 block w-full p-2.5 mt-2"
              placeholder="Examples 3"
              defaultValue={examples[2] || "*unavailable"}
              {...register("example 3")}
            />
          </div>
          <div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Phonetics
              </label>
              <input
                required
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Phonetics"
                defaultValue={phonetics}
                {...register("phonetics")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 mt-4">
                Bangla Meaning
              </label>
              <input
                required
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Meaning"
                defaultValue={meaning.originalBangla[0]}
                {...register("bdMeaning")}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Quiz Answer Options
            </label>
            {quizOptions.map((option, index) => (
              <input
                key={index}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleQuizOptionChange(index, e.target.value)}
              />
            ))}
          </div>
          <div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Quiz Question
              </label>
              <input
                required
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Question"
                {...register("quizQuestion")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 mt-4">
                Quiz correct answer
              </label>
              <select
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={correctAnswer}
                {...register("correctAnswer")}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              >
                <option value="" disabled>
                  Select Correct Answer
                </option>
                {quizOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Word Level
            </label>
            <select
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("level")}
            >
              <option value="" disabled>
                Select a level
              </option>
              {allLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Difficulty Level
            </label>
            <select
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("difficultyLevel")}
            >
              <option value="" disabled>
                Select DIfficulty
              </option>
              {allDifficulty.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Category image link
            </label>
            <input
              required
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Image link"
              {...register("image")}
            />
          </div>
          <input
            className="btn bg-[#562387] text-white mt-4 hover:bg-[#2e1545]"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ApproveWord;
