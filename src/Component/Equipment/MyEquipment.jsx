import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";
import { FaEye, FaPencilAlt, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Rating from "react-rating";

const MyEquipment = () => {
  const { user } = useContext(UserAuthContext);
  const userEmail = user?.email;
  const [myEquipment, setMyEquipment] = useState([]);
  console.log(myEquipment);

  useEffect(() => {
    if (userEmail) {
      const fetchData = async () => {
        const res = await fetch(
          `http://localhost:9000/all-Equipment?user=${userEmail}`
        );
        const data = await res.json();

        setMyEquipment(data);
      };
      fetchData();
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto">
        {myEquipment.map((item) => (
          <div>
            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition">
              <figure>
                <img
                  className="w-full h-[300px] object-cover"
                  src={item.image}
                  alt="Equipment"
                />
              </figure>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.itemName}</h2>
                <p className="text-[#6eb80e] font-medium">{item.price} Taka</p>
                <p className="text-sm text-gray-600 italic">{item.category}</p>
                <p className="text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Rating initialRating={item.rating} 
                  fullSymbol={<FaStar className="text-orange-600"></FaStar>}
                  emptySymbol={<FaStar className="text-gray-300"></FaStar>}>

                  </Rating>
                  <span className="text-sm text-gray-600">
                    ({item.rating} Reviews)
                  </span>
                </div>
                
                <div className="card-actions justify-between mt-5">
                  <button className="btn bg-custom-gradient text-white hover:bg-indigo-700">
                    View Details <FaEye></FaEye>
                  </button>
                  <button className="btn bg-green-600 text-white hover:bg-green-700">
                    Update <FaPencilAlt />
                  </button>
                  <button className="btn bg-red-500 text-white hover:bg-red-700">
                    Delete <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
