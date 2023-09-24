import React from "react";

function QuizCompleteOverlay({ percent, restartQuiz }) {
  return (
    <div className="w-screen h-screen absolute z-30 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-green-700 p-4 text-center text-white">
        <p className="font-bold text-2xl">All Done!</p>
        <p className="my-4 font-bold text-3xl">{percent}% score</p>

        <div className="flex justify-around">
          <div
            className="rounded-full py-1 w-28 border cursor-pointer hover:text-black hover:bg-white"
            onClick={restartQuiz}
          >
            Play Again
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCompleteOverlay;
