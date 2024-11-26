import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="bg-blue-50 shadow-lg justify-center items-center text-center rounded-lg w-80 h-96 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>

        {/* Office Address */}
        <div className="flex items-start mb-4">
          <i className="fas fa-map-marker-alt text-green-500 mr-3 mt-1"></i>
          <div>
            <p className="text-sm font-semibold">Office Address:</p>
            <p className="text-sm text-gray-600">
              123 Example Street, <br />
              Chennai, Tamil Nadu, India.
            </p>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="flex items-center mb-4">
          <i className="fas fa-phone text-green-500 mr-3"></i>
          <div>
            <p className="text-sm text-gray-800">+91 95009 49626</p>
            <p className="text-sm text-gray-800">+91 98765 43210</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 text-xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
