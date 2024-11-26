import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center items-center bg-blue-50">
      <div className=" w-80 h-auto p-5 shadow-lg rounded-lg text-center">
        <h2 className="section-header text-2xl font-semibold mb-4">About Us</h2>

        {/* About Table */}
        <div className="p-20"></div>
        <table className="about-us-table w-full mb-6">
          <tbody>
            <tr>
              <td className="table-row-label">
                <h3 className="table-row-label-text">Company Name</h3>
                <b className="table-row-label-separator">:</b>
              </td>
              <td className="table-row-value">K&Q Nutrition Center & Fitness</td>
            </tr>
            <tr>
              <td className="table-row-label">
                <h3 className="table-row-label-text">Nature of Business</h3>
                <b className="table-row-label-separator">:</b>
              </td>
              <td className="table-row-value">Nutrition & Fitness</td>
            </tr>
          </tbody>
        </table>

        {/* Specialities */}
        <h3 className="speciality-label text-xl font-semibold mt-4">Our Specialities</h3>
        <ul className="unorderedList list-disc pl-6 mb-6">
          <li>Complete client satisfaction</li>
          <li>Ethical business policies</li>
          <li>Live In Touch With Our Customers</li>
          <li>Transparent dealings</li>
          <li>Wide connectivity</li>
          <li>We listen, We understand, We provide Solution</li>
          <li>A great experience with Happy clients</li>
        </ul>

        {/* About Us Text */}
        <div className="about-us-text mb-6">
          <h3 className="text-lg font-semibold">K&Q NUTRITION & FITNESS WELCOMES YOU…</h3>
          <p className="text-gray-600 mb-4">
            Discover wellness with K&Q Nutrition & Fitness. Personalized nutrition, flexible routines, and cultural integration for a healthier you. Join today!
          </p>
          <p className="text-gray-600 mb-4">We Provide All Types Of Nutrition & Fitness Plans With Affordable Prices</p>

          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Weight Loss</strong></li>
            <li><strong>Weight Gain</strong></li>
            <li><strong>Weight Management</strong></li>
            <li><strong>Children Health</strong></li>
            <li><strong>Skin Care</strong></li>
            <li><strong>Immune Health</strong></li>
          </ul>

          <p className="font-semibold mb-4"><strong>About healthy lifestyle</strong></p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nutrients for body cells</li>
            <li>Elevation and joint health</li>
            <li>Brain and heart health</li>
            <li>Nutrition for Skin Diseases</li>
            <li>Special nutrition for women</li>
            <li>Nutrition for children</li>
            <li>To lose/gain/maintain body weight</li>
            <li>Nutrition for Men</li>
            <li>Improve immunity</li>
            <li>Special nutrition for Eyes</li>
            <li>Nutrition for athletes</li>
            <li>Individual nutrition</li>
          </ul>

          <p className="font-semibold mb-4"><strong>Exercise is King</strong></p>
          <p className="font-semibold mb-4"><strong>Nutrition is Queen</strong></p>
          <p className="font-semibold mb-4"><strong>Put Them together and</strong></p>
          <p className="font-semibold mb-6"><strong>You have got a Kingdom</strong></p>

          <h3 className="text-xl font-semibold mb-4">80% NUTRITION + 20% EXERCISE = 100% RESULTS</h3>
          <p className="text-gray-600 mb-6">
            இந்த அழைப்பிதழுடன் வருபவர்களுக்கு Free Health Checkup & Consulting…
          </p>

          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-600 mb-2">9500949626</p>
          <p className="text-gray-600">9444189327</p>
        </div>
      </div>
    </div>
  );
};

export default About;
