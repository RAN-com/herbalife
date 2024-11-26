import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar"; // Import Navbar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"; // Example pages
import Customers from "../pages/Customers"; // Example pages
import Appointments from '../pages/Appointments';
import Billing from '../pages/Billing';
import HealthRecords from '../pages/HealthRecords';
import Messages from '../pages/Messages';
import Settings from '../pages/Settings';
import Product from '../pages/Product'; // Import Product component
import CustomerDetail from '../pages/CustomerDetail';
import Home from "../Marathan/Home"; // Import Home component
import Notes from "../Marathan/Notes"; // Import Notes component
import DailyLog from '../Marathan/DailyLog'
import ProgressTracker from '../Marathan/ProgressTracker'
const SidebarLayout = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Container */}
        <div className="flex-1 ml-64"> {/* Ensure content starts after the sidebar */}
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="mt-16 "> {/* mt-16 to account for the navbar */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home route */}
              <Route path="/notes" element={<Notes />} /> {/* Notes route */}
              <Route path="/log" element={<DailyLog />} />
              <Route path="/progress" element={<ProgressTracker />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customer/:id" element={<CustomerDetail />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/healthRecords" element={<HealthRecords />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/products" element={<Product />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default SidebarLayout;
