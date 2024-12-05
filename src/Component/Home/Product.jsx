import React from "react";
import { hasProperty } from "./../../../node_modules/flowbite-datepicker/js/lib/utils";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";
import { FaEye, FaPencilAlt, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={item.image}
          alt="Equipment"
        />
      </figure>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{itemName}</h2>
        <p className="text-[#6eb80e] font-medium">{price} Taka</p>
        <p className="text-sm text-gray-600 italic">{categoryName}</p>
        <p className="text-gray-500 mt-2 line-clamp-2">{description}</p>
        <div className="flex items-center space-x-1 mt-2">
          <Rating
            initialRating={item.rating}
            fullSymbol={<FaStar className="text-orange-600"></FaStar>}
            emptySymbol={<FaStar className="text-gray-300"></FaStar>}
          ></Rating>
          <span className="text-sm text-gray-600">({rating} Reviews)</span>
        </div>

        <div className="card-actions justify-between mt-5">
          <button className="btn bg-custom-gradient text-white w-full">
            View Details <FaEye></FaEye>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
