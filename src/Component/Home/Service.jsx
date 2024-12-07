import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { TfiReload, TfiCup } from "react-icons/tfi";
import { IoDiamond } from "react-icons/io5";
import { TbPlaneTilt } from "react-icons/tb";

const Service = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Responsive container */}
            <div className="flex flex-wrap justify-center gap-4">
                {/* Service Block 1 */}
                <div className="flex p-5 space-x-6 items-center border rounded-md shadow-md bg-white dark:bg-slate-800 w-full sm:w-5/12 lg:w-1/4">
                    <div>
                        <span className="text-4xl text-[#6eb80e]">
                            <TbPlaneTilt />
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Free Delivery</h1>
                        <p className="text-sm">We'll even bring it into your home for free*.</p>
                    </div>
                </div>
                {/* Service Block 2 */}
                <div className="flex p-5 space-x-6 items-center border rounded-md shadow-md bg-white dark:bg-slate-800 w-full sm:w-5/12 lg:w-1/4">
                    <div>
                        <span className="text-4xl text-[#6eb80e]">
                            <PiShoppingBagOpenBold />
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Special Financing</h1>
                        <p className="text-sm">Up to 24 Months. Apply for an Appliances Connection.</p>
                    </div>
                </div>
                {/* Service Block 3 */}
                <div className="flex p-5 space-x-6 items-center border rounded-md shadow-md bg-white dark:bg-slate-800 w-full sm:w-5/12 lg:w-1/4">
                    <div>
                        <span className="text-4xl text-[#6eb80e]">
                            <TfiReload />
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">30 Day Returns</h1>
                        <p className="text-sm">Return your items for free* within 30 Days of purchase.</p>
                    </div>
                </div>
                {/* Service Block 4 */}
                <div className="flex p-5 space-x-6 items-center border rounded-md shadow-md bg-white dark:bg-slate-800 w-full sm:w-5/12 lg:w-1/4">
                    <div>
                        <span className="text-4xl text-[#6eb80e]">
                            <TfiCup />
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Rewards Program</h1>
                        <p className="text-sm">Join our loyalty program and earn money by shopping with us.</p>
                    </div>
                </div>
                {/* Service Block 5 */}
                <div className="flex p-5 space-x-6 items-center border rounded-md shadow-md bg-white dark:bg-slate-800 w-full sm:w-5/12 lg:w-1/4">
                    <div>
                        <span className="text-4xl text-[#6eb80e]">
                            <IoDiamond />
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Trade Program</h1>
                        <p className="text-sm">We offer exclusive pricing and resources to registered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
