// Context Setup
import React, { createContext, useState, useContext } from 'react';

const CustomerContext = createContext();

export const useCustomerContext = () => useContext(CustomerContext);

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', img: 'https://via.placeholder.com/150', address: '', dob: '', medicalIssues: '' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', img: 'https://via.placeholder.com/150', address: '', dob: '', medicalIssues: '' },
  ]);

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};
