import React from "react";
import { hasProperty } from "./../../../node_modules/flowbite-datepicker/js/lib/utils";

const Product = ({ item }) => {
    const {users,itemName,description,categoryName,price,rating,customization,processingTime,stockStatus,image}=item
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="w-full h-52"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" my-4">
          <div className="flex space-x-16 items-center justify-center">
          <h2 className="card-title">{itemName}</h2>
          <p className="card-title">{price} Taka</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
