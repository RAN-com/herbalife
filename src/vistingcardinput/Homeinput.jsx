import React, { useState, useEffect } from 'react';
import Logo from '../../public/vite.svg';

const HomeInput = () => {
  const [profileDetails, setProfileDetails] = useState({
    name1: 'Mr. Muruganantham',
    role1: 'Wellness Coach',
    name2: 'Ms. Rajalakshmi',
    role2: 'Wellness Coach',
  });

  const [viewCount, setViewCount] = useState(0);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem('viewCount');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    setViewCount(count + 1);
    localStorage.setItem('viewCount', count + 1);
  }, []);

  const handleEdit = () => setEditable(!editable);

  const handleDelete = () => {
    setProfileDetails({
      name1: '',
      role1: '',
      name2: '',
      role2: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 bg-gray-50 shadow-md rounded-lg w-full max-w-md mx-auto">
      {/* Header */}
      <Header viewCount={viewCount} />

      {/* Editable Input Section */}
      <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-6">
        {editable ? (
          <>
            <div className="mb-2">
              <input
                type="text"
                name="name1"
                value={profileDetails.name1}
                onChange={handleChange}
                placeholder="Name 1"
                className="border rounded w-full px-2 py-1"
              />
              <input
                type="text"
                name="role1"
                value={profileDetails.role1}
                onChange={handleChange}
                placeholder="Role 1"
                className="border rounded w-full px-2 py-1 mt-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="name2"
                value={profileDetails.name2}
                onChange={handleChange}
                placeholder="Name 2"
                className="border rounded w-full px-2 py-1"
              />
              <input
                type="text"
                name="role2"
                value={profileDetails.role2}
                onChange={handleChange}
                placeholder="Role 2"
                className="border rounded w-full px-2 py-1 mt-2"
              />
            </div>
          </>
        ) : (
          <p className="text-gray-700">Click "Edit" to modify details.</p>
        )}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          >
            {editable ? 'Save' : 'Edit'}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Output Section */}
      <ProfileCard profileDetails={profileDetails} />
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

const ProfileCard = ({ profileDetails }) => (
  <div className="text-gray-800 mt-4 bg-opacity-70 backdrop-blur-md p-4 rounded">
    <div className="font-semibold">
      {profileDetails.name1}{' '}
      <span className="text-sm italic">({profileDetails.role1})</span>
    </div>
    <div className="font-semibold mt-2">
      {profileDetails.name2}{' '}
      <span className="text-sm italic">({profileDetails.role2})</span>
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

export default HomeInput;
