import React from "react";
import { hasProperty } from "./../../../node_modules/flowbite-datepicker/js/lib/utils";
import { NavLink } from "react-router-dom";

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
    <div className="group">
  <div className="card card-compact bg-base-100 shadow-xl p-4">
    <figure>
      <img
        className="w-full h-52"
        src={image}
        alt="Shoes"
      />
    </figure>
    <div className="my-4">
      <div className="flex space-x-16 items-center justify-center">
        <h2 className="card-title">{itemName}</h2>
        <p className="card-title">{price} Taka</p>
      </div>
      {/* Smooth View Details Button */}
      <div className="flex justify-center mt-4">
        <NavLink to={`/details/${_id}`}><button
          className=" bg-custom-gradient text-white py-2 px-4 rounded transition-opacity duration-500 ease-in-out w-full"
        >
          View Details
        </button></NavLink>
      </div>
    </div>
  </div>
</div>

  );
};

export default Product;
