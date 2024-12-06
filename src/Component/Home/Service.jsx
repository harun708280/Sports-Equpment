import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { TfiReload, TfiCup } from "react-icons/tfi";
import { IoDiamond } from "react-icons/io5";
import { TbPlaneTilt } from "react-icons/tb";
import { Slide } from 'react-awesome-reveal';
const Service = () => {
    return (
        <Slide>
            <div>
            <div className="flex w-11/12 mx-auto ">
                <div className="flex p-5 space-x-6 items-center border">
                    <div className="">
                        <span className='text-4xl text-[#6eb80e]'><TbPlaneTilt />
                        </span>
                    </div>
                    <div className="">
                        <h1 className='text-lg font-bold'>Free Delivery</h1>
                        <p>We'll even bring it into your home for free*.</p>
                    </div>
                </div>
                <div className="flex p-5 space-x-6 items-center border">
                    <div className="">
                        <span className='text-4xl text-[#6eb80e]'><PiShoppingBagOpenBold /></span>
                    </div>
                    <div className="">
                        <h1 className='text-lg font-bold'>Special Financing</h1>
                        <p>Up to 24 Months. Apply for an Appliances Connection.</p>
                    </div>
                </div>
                <div className="flex p-5 space-x-6 items-center border">
                    <div className="">
                        <span className='text-4xl text-[#6eb80e]'><TfiReload /></span>
                    </div>
                    <div className="">
                        <h1 className='text-lg font-bold'>30 Day Returns</h1>
                        <p>Return your items for free* within 30 Days of purchase.</p>
                    </div>
                </div>
                <div className="flex p-5 space-x-6 items-center border">
                    <div className="">
                        <span className='text-4xl text-[#6eb80e]'><TfiCup /></span>
                    </div>
                    <div className="">
                        <h1 className='text-lg font-bold'>Rewards Program</h1>
                        <p>Join our loyalty program and earn money by shopping with us.</p>
                    </div>
                </div>
                <div className="flex p-5 space-x-6 items-center border">
                    <div className="">
                        <span className='text-4xl text-[#6eb80e]'><IoDiamond /></span>
                    </div>
                    <div className="">
                        <h1 className='text-lg font-bold'>Trade Program</h1>
                        <p>We offer exclusive pricing and resources to registered.</p>
                    </div>
                </div>
            </div>
        </div>
        </Slide>
    );
};

export default Service;