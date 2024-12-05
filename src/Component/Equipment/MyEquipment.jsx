import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";

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
            <div className="card card-compact bg-base-100  shadow-xl">
              <figure>
                <img className="w-full h-52" src={item.image} alt="Shoes" />
              </figure>
              <div className=" my-4">
                <div className="flex space-x-16 items-center justify-center">
                  <h2 className="card-title">{item.itemName}</h2>
                  <p className="card-title">{item.price} Taka</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-custom-gradient text-white w-full">
                    View Details
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
