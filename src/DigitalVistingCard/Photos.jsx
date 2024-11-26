import React from 'react';

const Photos = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h2 className="text-3xl text-center font-semibold mb-6">Photos</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-60 bg-white shadow-lg rounded-lg p-4 text-center">
          <img src="your-photo.jpg" alt="Your Photo" className="w-full h-40 object-cover rounded-lg" />
          <h3 className="mt-2">Your Name</h3>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
