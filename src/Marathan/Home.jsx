import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        30-Day Weight Loss & Gain Tracker
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Log your daily progress and track your weight journey easily.
      </p>
      <div className="space-x-4">
        <Link to="/notes">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Go to Notes
          </button>
        </Link>
        <Link to="/progress">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
            Track Progress
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
