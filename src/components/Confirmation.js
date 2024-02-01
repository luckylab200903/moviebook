import React from 'react';
import successGif from './success.gif'; // Importing the GIF

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={successGif} alt="Happy Yes GIF" />
      <h1 className="text-4xl font-bold text-green-600 mb-6">Success!</h1>
      <p className="text-lg text-gray-800">Your action was successful.</p>
      {/* You can add more content or components here */}
    </div>
  );
};

export default Confirmation;
