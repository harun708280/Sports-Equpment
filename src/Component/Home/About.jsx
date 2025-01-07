import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row  my-9 gap-8">
        {/* Image Section */}
        <div className="flex-1 relative">
          <div
            className="hero h-[300px] md:h-[500px] w-full bg-cover bg-center bg-fixed rounded-lg"
            style={{
              backgroundImage:
                "url(https://www.monaco.edu/wp-content/uploads/sites/4/2021/07/Sports_Management.jpg)",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40 rounded-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-[150px] md:h-[400px] w-[150px] md:w-[400px] object-cover border-4 border-white shadow-lg rounded-lg"
              src="https://www.monaco.edu/wp-content/uploads/sites/4/2021/07/Sports_Management.jpg"
              alt="Sports Management"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
            About Us
          </h1>
          <p className="text-xl font-semibold  mb-2 mt-5">
            We Offer Quality Sports Gear
          </p>
          <p className=" mt-5">
            Discover a wide range of premium sports gear designed to elevate
            your performance. Whether you're a professional athlete or a fitness
            enthusiast, we ensure quality, durability, and comfort in every
            product.
          </p>
          <div className="my-4">
            <h1 className="text-xl font-bold">Features</h1>

            <p className="flex items-center mt-4 gap-3 text-lg">
              <IoCheckmarkCircleSharp className="text-lime-600 text-2xl" />
              <span>
                Precision-engineered equipment for optimal performance
              </span>
            </p>
            <p className="flex items-center mt-4 gap-3 text-lg">
              <IoCheckmarkCircleSharp className="text-lime-600 text-2xl" />
              <span>
                Designed to meet the needs of beginners and pros alike
              </span>
            </p>
            <p className="flex items-center mt-4 mb-7 gap-3 text-lg">
              <IoCheckmarkCircleSharp className="text-lime-600 text-2xl" />
              <span>
                Built with the highest quality materials for long-lasting use
              </span>
            </p>

            <NavLink
              to="/all-Equipment"
              className="text-lg uppercase bg-custom-gradient text-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
            >
              Explore Our Collection
            </NavLink>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
