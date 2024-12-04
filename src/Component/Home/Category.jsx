import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="">
        <h2 className="text-3xl text-center font-bold my-6">Sports Categories</h2>
        <div className="flex space-x-6 items-center justify-center my-7 text-xl">
        
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
