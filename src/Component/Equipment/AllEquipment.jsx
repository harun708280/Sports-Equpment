import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { DarkContext } from "../Optional/Theme";
import { Fade, Zoom } from "react-awesome-reveal";
import Typical from "react-typical";
import { ReactTyped } from "react-typed";
const AllEquipment = () => {
  useEffect(()=>{
    document.title="Sports Zone || All-Equipment"

},[])
  const loadData = useLoaderData();

  const [allData, setAllData] = useState(loadData);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    serchHandle(value);
  };
  const serchHandle = (value) => {
    fetch(`https://sports-equiepment.vercel.app/all-Equipment?search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  };

  const handleSort = (sort) => {
    fetch(`https://sports-equiepment.vercel.app/all-Equipment?sort=${sort}`)
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
              className="mt-2 p-2 border border-gray-300  rounded-md w-full"
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
            <div className="overflow-x-auto">
              <table className={`${isDark ? "table " : "table table-zebra"}`}>
                {/* head */}
                {
                  allData.length>0 && <thead>
                  <tr className="text-lg bg-custom-gradient text-white">
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category,</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                }
                <tbody>
                  {/* row 1 */}

                  {allData.map((item, idx) => (
                    <tr className={`${isDark ? "bg-green-500" : ""}`}>
                      <th>{idx + 1}</th>
                      <td>
                        <img className="h-14 w-14" src={item.image} alt="" />
                      </td>
                      <td>{item.itemName}</td>
                      <td>{item.categoryName}</td>
                      <td>{item.price} Taka</td>
                      <td className="flex items-center space-x-6">
                        {item.rating}{" "}
                        <span className="text-orange-600">
                          <IoIosStar />
                        </span>
                      </td>
                      <td>
                        <NavLink to={`/details/${item._id}`}>
                          <button className="btn bg-[#6eb80e] text-white">
                            Details
                          </button>
                        </NavLink>
                      </td>
                    </tr>
                  ))}

                  {/* row 2 */}
                </tbody>
              </table>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;