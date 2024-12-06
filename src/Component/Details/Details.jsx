import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaLeftLong } from 'react-icons/fa6';
import Rating from 'react-rating';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const loadData=useLoaderData()
    console.log(loadData);
    const {users,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,image}=loadData
    const navigate=useNavigate()
    return (
        <div>
            <div className="w-10/12 mx-auto my-12 shadow-lg shadow-slate-900 p-9">
            <button onClick={()=>navigate(-1)} className='flex items-center space-x-2 btn bg-custom-gradient text-white my-5'> <FaLeftLong></FaLeftLong> Back </button>
                <div className="flex items-center space-x-10">
                    <div className="">
                        <img className='h-[500px] w-[500px] rounded-lg' src={image} alt="" srcset="" />
                    </div>
                    <div className="space-y-4">
                        <div className=" flex space-x-10 text-xl  font-bold">
                            <h1>Product Item : {itemName}</h1>
                            

                        </div>
                        <div className=" flex space-x-10 text-xl text-gray-600 font-bold"> 
                        <h1> CategoryName : {categoryName}</h1>
                            <h1>Customization : {customization}</h1>
                            

                        </div>
                        <div className=" flex space-x-10 text-xl text-gray-600 font-bold">
                            <h1>Processing-Time : {processingTime} day</h1>
                            <h1>Product StockStatus : {stockStatus}</h1>

                        </div>
                        <div className="flex space-x-2 items-center"> 
                            <h1 className=' font-bold text-gray-600'> Product Rating</h1>
                            <Rating initialRating={rating}
                            readonly
                            fullSymbol={ <FaStar className='text-orange-500'> </FaStar> }
                            emptySymbol={<FaStar className='text-gray-300'></FaStar>}
                            >

                            </Rating>
                            <p>{rating}/5</p>
                        </div>
                        <div className="text-gray-600">
                            <h1>{description}</h1>
                        </div>
                        <div className="text-white space-x-6">
                            <button className='btn bg-custom-gradient text-white'>Add to Cart </button>
                            <button className='btn bg-custom-gradient text-white'>Buy Now</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
    );
};

export default Details;