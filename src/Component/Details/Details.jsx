import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import Rating from "react-rating";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Product from "../Home/Product";
import toast from "react-hot-toast";
import AxiosSecure from "../AxiosSecure";
import Authentication, { UserAuthContext } from "../../Firebase/Authentication";
import useCard from "../../Hooks/useCard";

const Details = () => {
  useEffect(() => {
    document.title = "Sports Zone || Details";
  }, []);

  const location = useLocation();
  const loadData = useLoaderData();

  const { user } = useContext(UserAuthContext);

  const {
    users,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    image,
    _id,
  } = loadData;
  const navigate = useNavigate();
  const axiosPublic = usePublicAxios();

  const [cart,refetch]=useCard()

  const { data: related = [], isPending } = useQuery({
    queryKey: ["related", categoryName],
    queryFn: async () => {
      const res = await axiosPublic.get(`/equipments?category=${categoryName}`);
      return res.data;
    },
  });

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity === 5) {
      return toast.error("sorry maximum 5product add to cart");
    }
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const axiosSecure = AxiosSecure();

  const handleAddCard = async () => {
    
    const card = {
      code:_id,
      sellerEmail: users,
      quantity,
      customerEmail: user?.email,
      customerName: user?.displayName,
    };

    try {
      const { data } = await axiosSecure.post(
        `${import.meta.env.VITE_API}/add-cards`,
        card
      );
  
      if (data.insertedId) {
        toast.success("successfully this product add this card");
        refetch()
      }
    } catch (er) {
      toast.error(er.response.data.error)
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 my-12">
      <div className="w-full mx-auto shadow-lg p-9">
        <div className="md:flex items-center space-x-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              className="w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-lg object-cover"
              src={image}
              alt="Product Image"
            />
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
            <div className="text-2xl font-bold">
              <h1>Product Item: {itemName}</h1>
            </div>
            <div className="text-xl text-gray-600 dark:text-white font-bold flex flex-wrap gap-4">
              <h1>Category: {categoryName}</h1>
              <h1>Customization: {customization}</h1>
            </div>
            <div className="text-xl text-gray-600 dark:text-white font-bold flex flex-wrap gap-4">
              <h1>Processing Time: {processingTime} day</h1>
              <h1>Stock Status: {stockStatus}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="font-bold text-gray-600 dark:text-white">
                Product Rating
              </h1>
              <Rating
                initialRating={rating}
                readonly
                fullSymbol={<FaStar className="text-orange-500" />}
                emptySymbol={<FaStar className="text-gray-300" />}
              />
              <p>{rating}/5</p>
            </div>
            <div className="text-gray-600 dark:text-white">
              <p>{description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-bold text-gray-600 dark:text-white">
                Quantity:
              </p>
              <button
                onClick={handleDecrement}
                className="px-3 py-1 bg-gray-300 rounded text-gray-800"
                disabled={quantity === 1}
              >
                -
              </button>
              <p className="font-bold">{quantity}</p>
              <button
                disabled={quantity === 6}
                onClick={handleIncrement}
                className="px-3 py-1 bg-gray-300 rounded text-gray-800"
              >
                +
              </button>
            </div>
            <div className="space-x-4">
              <button
                onClick={handleAddCard}
                className="btn bg-custom-gradient text-white w-full md:w-auto py-2"
              >
                Add to Cart
              </button>
              <button className="btn bg-custom-gradient text-white w-full md:w-auto py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold mt-7">Related Product </h1>
        <div className="grid grid-cols-4 gap-9 my-7">
          {related.map((item) => (
            <Product item={item}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
