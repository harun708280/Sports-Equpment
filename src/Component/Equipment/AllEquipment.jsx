import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { DarkContext } from "../Optional/Theme";
import { Fade, Zoom } from "react-awesome-reveal";

import { ReactTyped } from "react-typed";
import Product from "../Home/Product";
const AllEquipment = () => {
  useEffect(()=>{
    document.title="Sports Zone || All-Equipment"

},[])
  const loadData = useLoaderData();
  
  

  const [allData, setAllData] = useState(loadData);
  const [searchValue, setSearchValue] = useState("");
 
  const handleChangeValue = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    serchHandle(value);
  };
  const serchHandle = (value) => {
    fetch(`${import.meta.env.VITE_API}/all-Equipment?search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  };

  const handleSort = (sort) => {
    fetch(`${import.meta.env.VITE_API}/all-Equipment?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  };

  //   itemName,description,categoryName,description,price,rating,customization,processingTime,stockStatus,image
  const { isDark } = useContext(DarkContext);
  return (
    <div>
      <div className="w-10/12 mx-auto my-12">
        <h2 className="text-3xl text-center font-bold text-[#6eb80e] mb-8">
          Our All Sports Requirements
        </h2>

        <div className="my-7  mx-auto flex justify-between items-center space-x-32">
          <div className="w-7/12">
            
           
            <div className="flex  items-center space-x-4">
            <p className="bg-custom-gradient py-2 px-5 text-white rounded">Search By : </p><ReactTyped 
            strings={[
              "Equipment Item Name",
              "User Email Name",
              "Equipment Category",
              "Equipment Price"
            ]}
            className="text-[#6eb80e] font-bold"
            loop={true}
            typeSpeed={60}
            backSpeed={70}
            
            >

            </ReactTyped>
            </div>

            <input
              type="text"
              value={searchValue}
              onChange={handleChangeValue}
              className="mt-2 p-2 border border-gray-300 dark:text-black rounded-md w-full"
              placeholder="Search by name, price, category, rating"
            />
          </div>
          <div className="">
            <button
              onClick={() => handleSort("asc")}
              className="btn bg-custom-gradient text-white"
            >
              Sort By Price
            </button>
          </div>
        </div>

        <div className="">
          {
            allData.length===0 && <h1 className="text-center text-3xl font-semibold">Sorry This Product Not Available</h1>
          }
          <Fade>
            <div className="">
                   <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6  my-12">
                   {allData.map((item, idx) => <Product item={item}></Product>)}


                   </div>
                
                  {/* row 1 */}

                 
                  {/* row 2 */}
                
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;