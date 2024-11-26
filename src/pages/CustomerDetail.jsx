import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../Usertabs/AboutTab';
import Attendance from '../Usertabs/AttendanceTab';
import Marathon from '../Usertabs/MarathanTab';
import Record from '../Usertabs/ReportsTab';

const CustomerDetail = () => {
  const location = useLocation();
  const customer = location.state?.customer; // Access the customer passed in state
  const [activeTab, setActiveTab] = useState('about'); // State to track active tab

  if (!customer) {
    return <p>Customer not found</p>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <About customer={customer} />;
      case 'attendance':
        return <Attendance customer={customer} />;
      case 'marathon':
        return <Marathon customer={customer} />;
      case 'record':
        return <Record customer={customer} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <h1 className="text-2xl  font-bold mb-4">Customer Details</h1>
      <div className="bg-blue-950 p-6 rounded-md shadow-lg">
        <img
          src={customer.img}
          alt={customer.name}
          className="w-96 h-96 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl text-white font-semibold text-center mb-4">{customer.name}</h2>

        {/* Tabs */}
        <div className="flex justify-around text-white border-b mb-4">
          {['about', 'attendance', 'marathon', 'record'].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-500 font-semibold'
                  : 'text-white hover:text-blue-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CustomerDetail;
