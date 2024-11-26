import React from 'react';

const Dashboard = () => {
  return (
    <div className="relative">
      <div className=" w-full h-screen p-8 bg-white rounded-lg shadow-lg">
        {/* Content of your Dashboard */}
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="mt-2">This is your dashboard content.</p>
      </div>

      {/* Gradient overlay without hover effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 opacity-100 transition-opacity duration-300 rounded-lg"></span>
      <span className="relative flex items-center text-black"></span>
    </div>
  );
}

export default Dashboard;
