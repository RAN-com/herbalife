import React from 'react';

const Video = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h2 className="text-3xl text-center font-semibold mb-6">Video</h2>
      <div className="text-center">
        <div className="w-full max-w-xl mx-auto">
          <video className="w-full rounded-lg" controls>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="mt-4">Your Name</h3>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default Video;
