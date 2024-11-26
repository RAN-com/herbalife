import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Logo from '../../public/vite.svg';

const Home = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('viewCount');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    setViewCount(count + 1);
    localStorage.setItem('viewCount', count + 1);
  }, []);

  return (
    <div
      className="bg-gray-50 text-center p-4 mx-auto shadow-md w-80 h-1/4 rounded-lg"
      style={{
        backgroundImage: `url('../../src/assets/bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header viewCount={viewCount} />
      <ProfileCard />
      <ContactButtons />
    </div>
  );
};

const Header = ({ viewCount }) => (
  <div className="mb-4 bg-opacity-70 backdrop-blur-md p-4 rounded">
    <div className="flex justify-center items-center text-gray-700 space-x-2">
      <i className="fas fa-eye"></i>
      <span>Views: <b>{viewCount}</b></span>
    </div>
    <img
      src={Logo}
      alt="Profile"
      className="rounded-full w-24 mx-auto my-2 border-4 border-blue-300"
    />
    <h1 className="text-lg font-bold text-green-600">K&Q Nutrition & Fitness</h1>
    <div className="h-1 bg-green-400 mx-auto w-24 mt-1"></div>
  </div>
);

const ProfileCard = () => (
  <div className="text-gray-800 mt-4 bg-opacity-70 backdrop-blur-md p-4 rounded">
    <div className="font-semibold">
      Mr. Muruganantham <span className="text-sm italic">(Wellness Coach)</span>
    </div>
    <div className="font-semibold mt-2">
      Ms. Rajalakshmi <span className="text-sm italic">(Wellness Coach)</span>
    </div>
  </div>
);

const ContactButtons = () => (
  <div className="grid grid-cols-2 gap-4 mt-6">
    <a
      href="tel:+919500949626"
      className="bg-green-500 text-white rounded py-3 px-4 flex items-center justify-center space-x-2 hover:bg-green-600 transition"
    >
      <i className="fas fa-phone"></i>
      <span>Call Me</span>
    </a>
    <a
      href="https://wa.me/919500949626?text=Got reference from your Digital vCard. Want to know more details."
      className="bg-green-400 text-white rounded py-3 px-4 flex items-center justify-center space-x-2 hover:bg-green-500 transition"
    >
      <i className="fab fa-whatsapp"></i>
      <span>Whatsapp</span>
    </a>
    <a
      href="https://maps.app.goo.gl/TU5v59SDQSQmZcJP7"
      className="bg-blue-500 text-white rounded py-3 px-4 flex items-center justify-center space-x-2 hover:bg-blue-600 transition"
    >
      <i className="fas fa-map-marker-alt"></i>
      <span>Direction</span>
    </a>
    <a
      href="mailto:"
      className="bg-gray-500 text-white rounded py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-600 transition"
    >
      <i className="fas fa-envelope"></i>
      <span>Mail</span>
    </a>
  </div>
);

export default Home;
