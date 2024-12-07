import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaLeftLong } from 'react-icons/fa6';
import Rating from 'react-rating';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    useEffect(() => {
        document.title = "Sports Zone || Details";
    }, []);
    
    const location = useLocation();
    const loadData = useLoaderData();
    console.log(loadData);
    const { users, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, image } = loadData;
    const navigate = useNavigate();
    
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 my-12">
            <div className="w-full mx-auto shadow-lg p-9">
                <div className="md:flex items-center space-x-8">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img className='w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-lg object-cover' src={image} alt="Product Image" />
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
                            <h1 className='font-bold text-gray-600 dark:text-white'>Product Rating</h1>
                            <Rating initialRating={rating}
                                readonly
                                fullSymbol={<FaStar className='text-orange-500' />}
                                emptySymbol={<FaStar className='text-gray-300' />}
                            />
                            <p>{rating}/5</p>
                        </div>
                        <div className="text-gray-600 dark:text-white">
                            <p>{description}</p>
                        </div>
                        <div className="space-x-4">
                            <button className='btn bg-custom-gradient text-white w-full md:w-auto py-2'>Add to Cart</button>
                            <button className='btn bg-custom-gradient text-white w-full md:w-auto py-2'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
