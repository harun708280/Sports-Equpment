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
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
