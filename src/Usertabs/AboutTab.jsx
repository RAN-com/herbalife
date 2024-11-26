import React from 'react';
import { useLocation } from 'react-router-dom';

const AboutTab = () => {
  const location = useLocation();
  const customer = location.state?.customer;

  if (!customer) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
        <h1 className="text-2xl font-bold text-center text-white">Customer Details</h1>
        <p className="text-center mt-4">No customer data available.</p>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Customer Details</h1>

      <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
        <img
          src={customer.img || 'https://via.placeholder.com/150'}
          alt={customer.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-lg font-bold text-center">{customer.name}</h2>
        <p className="text-center text-gray-600">{customer.email}</p>
        <p className="text-center text-gray-600">{customer.phone}</p>
        <hr className="my-4" />
        <div>
          <p className="font-semibold">Address:</p>
          <p>{customer.address || 'N/A'}</p>
        </div>
        <div>
          <p className="font-semibold">Date of Birth:</p>
          <p>{customer.dob || 'N/A'}</p>
        </div>
        <div>
          <p className="font-semibold">Medical Issues:</p>
          <p>{customer.medicalIssues || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
