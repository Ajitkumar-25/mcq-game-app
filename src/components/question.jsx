import React from 'react';

function Question({ question, currentQuestion, totalQuestions, handleAnswerOptionClick }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="text-2xl font-semibold mb-4">{question.question}</div>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => handleAnswerOptionClick(option === question.answer)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="text-md font-bold text-center text-gray-600 mt-4">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
    </div>
  );
}

export default Question;
