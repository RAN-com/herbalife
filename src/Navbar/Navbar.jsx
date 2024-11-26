import React from 'react';
import { Bell, Search } from 'lucide-react'; // Import the necessary icons
import { useLocation } from 'react-router-dom'; // To get the current path for dynamic title

export default function Navbar() {
  const location = useLocation(); // Get current route location
  let title = "";

  // Set title based on current path
  switch (location.pathname) {
    case "/dashboard":
      title = "Dashboard";
      break;
    case "/appointments":
      title = "Appointments";
      break;
    case "/billing":
      title = "Billing";
      break;
    case "/health-records":
      title = "Health Records";
      break;
    case "/messages":
      title = "Messages";
      break;
    case "/settings":
      title = "Settings";
      break;
    case "/customers":
      title = "Customers";
      break;
    default:
      title = "My App"; // Default title
  }

  return (
    <header className=' shadow fixed top-0 left-64 right-0 z-10 transition-all duration-500 ease-in-out bg-blue-500'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Dynamic Title */}
        <h1 className='text-xl font-semibold'>{title}</h1>

        <div className='flex items-center flex-grow mx-4'>
          {/* Search Bar */}
          <div className='flex-grow ml-[700px] relative'>
            <input
              type='text'
              placeholder='Search...'
              className='w-60 h-10 rounded-full border border-gray-300 pl-10 pr-2 py-1 focus:outline-none focus:ring focus:ring-blue-500'
            />
            <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
              <Search size={20} className='text-gray-400' />
            </div>
          </div>

          {/* Notification Icon */}
          <button className='-ml-10 p-2 rounded-full hover:bg-gray-100 mr-8'>
            <Bell size={24} />
          </button>

          {/* User Profile Image */}
          <img
            src='user-image-url.jpg' // Replace with actual user image URL
            alt='User'
            className='w-10 h-10 rounded-full'
          />
        </div>
      </div>
    </header>
  );
}
