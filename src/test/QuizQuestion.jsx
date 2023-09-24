import React from 'react';
import QuizOption from './QuizOption'; // Import the QuizOption component

function QuizQuestion() {
  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      // Handle correct answer
      console.log('You selected the correct option!');
    } else {
      // Handle wrong answer
      console.log('You selected the wrong option.');
    }
  };

  return (
    <div>
      <h3>What is the capital of France?</h3>
      <QuizOption text="Paris" isCorrect={true} onClick={() => handleOptionClick(true)} />
      <QuizOption text="London" isWrong={true} onClick={() => handleOptionClick(false)} />
      <QuizOption text="Berlin" onClick={() => handleOptionClick(false)} />
    </div>
  );
}

export default QuizQuestion;
