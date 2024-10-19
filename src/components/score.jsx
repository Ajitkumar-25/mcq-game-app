import React from 'react';

function Score({ score, total }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      <div className="text-2xl font-semibold mb-4">Quiz Complete!</div>
      <div className="text-xl mb-4">You scored {score} out of {total}</div>
      <button
        className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
}

export default Score;
