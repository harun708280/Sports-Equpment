import React from "react";
import { useLoaderData } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
const AllEquipment = () => {
  const loadData = useLoaderData();
  console.log(loadData);
//   itemName,description,categoryName,description,price,rating,customization,processingTime,stockStatus,image

  return (
    <div>
      <div className="w-10/12 mx-auto my-12">
        <h2 className="text-3xl text-center font-bold text-[#6eb80e] mb-8">
          Our All Sports Requirements
        </h2>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-lg bg-[#6eb80e] text-white">
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category,</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {loadData.map((item,idx) => (
                  <tr>
                    <th>{idx+1}</th>
                    <td><img className="h-14 w-14" src={item.image} alt="" /></td>
                    <td>{item.itemName}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.price} Taka</td>
                    <td className="flex items-center space-x-6">{item.rating} <span className="text-orange-600"><IoIosStar /></span></td>
                    <td><button className="btn bg-[#6eb80e] text-white">Details</button></td>
                  </tr>
                ))}

                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
