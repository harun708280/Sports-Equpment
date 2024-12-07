import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import olp from './olympic-athlete.json'
import Lottie from "lottie-react";

const Category = ({ category }) => {
  return (
    <div className="">
  {/* Header Section */}
  <h2 className="text-3xl text-center font-bold my-6 flex flex-col sm:flex-row items-center justify-center">
    Sports Categories
    <span>
      <Lottie animationData={olp} className="w-20 h-20"></Lottie>
    </span>
  </h2>
  
  {/* Navigation Section */}
  <div className="flex flex-wrap gap-4 items-center justify-center my-7 text-xl">
    {/* All Categories */}
    <h1>
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-[#6eb80e] text-xl font-bold text-[#6eb80e] transition-all duration-300"
            : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
        }
      >
        All
      </NavLink>
    </h1>
    
    {/* Dynamic Categories */}
    {category.map((item, index) => (
      <NavLink
        key={index}
        to={`/Equipment/${item}`}
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-[#6eb80e] text-xl font-bold text-[#6eb80e] transition-all duration-300"
            : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
        }
      >
        {item}
      </NavLink>
    ))}
  </div>
</div>

    
  );
};

export default Category;
