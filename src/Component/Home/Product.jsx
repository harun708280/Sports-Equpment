import React from "react";
import { hasProperty } from "./../../../node_modules/flowbite-datepicker/js/lib/utils";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";
import { FaEye, FaPencilAlt, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Zoom } from "react-awesome-reveal";
import { Card } from "flowbite-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Product = ({ item }) => {
  const {
    _id,
    users,
    itemName,
    description,
    categoryName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    image,
  } = item;
  return (
    
      <Card
  className="h-full"
  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
  
>
  <img 
    src={image} 
    alt="Apple Watch Series 7 in colors pink, silver, and black" 
    className="w-full h-full object-cover" 
  />
  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    {itemName}
  </h5>
  <div className="mb-5 mt-2.5 flex items-center">
    <Rating 
      initialRating={rating}
      fullSymbol={<FaStar className="text-yellow-300" />}
      emptySymbol={<FaStar className="text-gray-300" />}
    />
    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
      {rating}
    </span>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-3xl font-bold text-gray-900 dark:text-white flex space-x-2">
      <FaBangladeshiTakaSign />
      {price}
    </span>
    <NavLink 
      to={`/details/${_id}`}
      className="rounded-lg bg-custom-gradient px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
    >
      View Details
    </NavLink>
  </div>
</Card>

    
  );
};

export default Product;
