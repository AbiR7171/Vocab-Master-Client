import React, { useState, useEffect, useRef } from "react";
import QuizCompleteOverlay from "./QuizCompleteOverlay";
import "./custom.scss";

function QuizComponent() {
  const [canClick, setCanClick] = useState(true);
  const [timer, setTimer] = useState(100000000);
  const [endOfQuiz, setEndOfQuiz] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    answer: 1,
    choices: [],
  });
  const [percentageScore, setPercentageScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const itemsRef = useRef([]);

  const loadQuestion = () => {
    setCanClick(true);
    if (questions.length > questionCounter) {
      setTimer(100);
      setCurrentQuestion(questions[questionCounter]);
      setQuestionCounter((prevCounter) => prevCounter + 1);
    } else {
      onQuizEnd();
    }
  };

  const clearSelected = (divSelected) => {
    setTimeout(() => {
      divSelected.classList.remove("option-correct");
      divSelected.classList.remove("option-wrong");
      divSelected.classList.add("option-default");
      loadQuestion();
    }, 1000);
  };

  const onOptionClicked = (choice, item) => {
    if (canClick) {
      const divContainer = itemsRef.current[item];
      const optionID = item + 1;
      if (currentQuestion.answer === optionID) {
        console.log("you are correct");
        setScore((prevScore) => prevScore + 10);
        divContainer.classList.add("option-correct");
        divContainer.classList.remove("option-default");
      } else {
        console.log("you are wrong");
        divContainer.classList.add("option-wrong");
        divContainer.classList.remove("option-default");
      }
      setTimer(100000000);
      setCanClick(false);
      clearSelected(divContainer);
      console.log(choice, item);
    } else {
      console.log("cant select question");
    }
  };

  const countDownTimer = () => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        console.log("timer is up");
        onQuizEnd();
        clearInterval(interval);
      }
    }, 150);
  };

  const fetchQuestionsFromServer = async () => {
    console.log("fetch questions from server");
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18"
      );
      const data = await response.json();
      const newQuestions = data.results.map((serverQuestion) => {
        const arrangedQuestion = {
          question: serverQuestion.question,
          choices: "",
          answer: "",
        };

        const choices = serverQuestion.incorrect_answers;

        arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);

        choices.splice(
          arrangedQuestion.answer - 1,
          0,
          serverQuestion.correct_answer
        );

        arrangedQuestion.choices = choices;

        return arrangedQuestion;
      });

      console.log("new formatted questions", newQuestions);
      setQuestions(newQuestions);
      loadQuestion();
      countDownTimer();
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const onQuizEnd = () => {
    setPercentageScore((prevScore) => (prevScore / 100) * 100);
    setTimer(1000000);
    setEndOfQuiz(true);
  };

  const onQuizStart = () => {
    setCanClick(true);
    setTimer(10000000);
    setEndOfQuiz(false);
    setQuestionCounter(0);
    setScore(0);
    setCurrentQuestion({
      question: "",
      answer: 1,
      choices: [],
    });
    setPercentageScore(0);
    setQuestions([]);
    fetchQuestionsFromServer();
  };

  useEffect(() => {
    fetchQuestionsFromServer();
  }, []);

  const formattedQuestion = currentQuestion.question.replace(
    /&([^;]+);/gm,
    (match, entity) => {
      const entities = {
        amp: "&",
        apos: "'",
        "#x27": "'",
        "#x2F": "/",
        "#39": "'",
        "#47": "/",
        lt: "<",
        gt: ">",
        nbsp: " ",
        quot: '"',
        "#039": "'",
      };
      return entities[entity] || match;
    }
  );

  return (
    <main
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="flex h-screen items-center justify-center bg-gray-100"
    >
      {endOfQuiz && (
        <QuizCompleteOverlay percent={score} restartQuiz={onQuizStart} />
      )}

      <div
        className={`overflow-hidden bg- flex-none container relative shadow-lg rounded-lg px-12 py-6 ${
          endOfQuiz ? "quiz-end" : ""
        }`}
      >
        <img
          src="/public/img/abstract.svg"
          alt=""
          className="absolute -top-10 left-0 object-none"
        />

        <div className="relative z-20">
          <div className="text-right text-gray-800">
            <p className="text-sm leading-3">Score</p>
            <p className="font-bold">{score}</p>
          </div>

          {/* <div className="rounded-lg bg-gray-100 p-2 neumorph-1 text-center font-bold text-gray-800 mt-8">
            <div className="bg-white p-5">{formattedQuestion}</div>
          </div> */}

          <div className="mt-8">
            {currentQuestion.choices.map((choice, item) => (
              <div
                key={item}
                className="neumorph-1 option-default bg-gray-100 p-2 rounded-lg mb-3 relative"
                ref={(element) => {
                  if (element) {
                    itemsRef.current[item] = element;
                  }
                }}
                onClick={() => onOptionClicked(choice, item)}
              >
                <div className="bg-blue-700 p-1 transform rotate-45 rounded-md h-10 w-10 text-white font-bold absolute right-0 top-0 shadow-md">
                  <p className="transform -rotate-45">+10</p>
                </div>

                <div className="rounded-lg font-bold flex p-2">
                  <div className="p-3 rounded-lg">{item}</div>
                  <div className="flex items-center pl-6">{choice}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="h-1 w-12 bg-gray-800 rounded-full mx-auto"></div>
            <p className="font-bold text-gray-800">
              {questionCounter}/{questions.length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuizComponent;
