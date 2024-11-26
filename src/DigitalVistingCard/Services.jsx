import React from 'react';

const Services = () => {
  return (
    <div className=" space-x-5 justify-center items-center  bg-gray-100 p-5">
      <h2 className="text-3xl text-center font-semibold mb-6">Our Services</h2>
      <div className=" ">
        <div className="bg-white  justify-center items-center text-center p-4 shadow-lg rounded-lg w-80 h-auto">
          <img src="weight-loss.jpg" alt="Weight Loss" className="w-full h-40 object-cover rounded-lg" />
          <p className="text-center mt-2">Weight Loss</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg w-80 h-auto">
          <img src="weight-gain.jpg" alt="Weight Gain" className="w-full h-40 object-cover rounded-lg" />
          <p className="text-center mt-2">Weight Gain</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg w-80 h-auto">
          <img src="kids-nutrition.jpg" alt="Kids Nutrition" className="w-full h-40 object-cover rounded-lg" />
          <p className="text-center mt-2">Kids Nutrition</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg w-80 h-auto">
          <img src="skincare.jpg" alt="Skincare" className="w-full h-40 object-cover rounded-lg" />
          <p className="text-center mt-2">Skincare</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg w-80 h-auto">
          <img src="immunity-booster.jpg" alt="Immunity Booster" className="w-full h-40 object-cover rounded-lg" />
          <p className="text-center mt-2">Immunity Booster</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
