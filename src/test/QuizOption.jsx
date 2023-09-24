import React from 'react';
import './custom.scss'; // Import your custom styles

function QuizOption({ text, isCorrect, isWrong, onClick }) {
  // Determine the CSS class based on the option's correctness
  const optionClass = isCorrect
    ? 'option-correct'
    : isWrong
    ? 'option-wrong'
    : 'option-default';

  return (
    <div className={`quiz-option ${optionClass}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default QuizOption;
