import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";
import { FaEye, FaPencilAlt, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";

const MyEquipment = () => {
  const { user } = useContext(UserAuthContext);
  const userEmail = user?.email;
  const [myEquipment, setMyEquipment] = useState([]);
  console.log(myEquipment);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  useEffect(() => {
    if (userEmail) {
      const fetchData = async () => {
        const res = await fetch(
          `https://sports-equiepment.vercel.app/all-Equipment?user=${userEmail}`
        );
        const data = await res.json();

        setMyEquipment(data);
      };
      fetchData();
    }
  }, []);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-white",
        cancelButton: "btn bg-red-600 mr-7 text-white hover:bg-red-700",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",

        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://sports-equiepment.vercel.app/equipments/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const filterData = myEquipment.filter(
                  (item) => item._id !== id
                );
                setMyEquipment(filterData);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                  confirmButtonText: "Ok Done",
                  customClass: {
                    confirmButton: "bg-custom-gradient",
                  },
                });
              }
              console.log(data);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  const handleToggle = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className="flex w-11/12 my-12 mx-auto">
      <div className="w-2/12 ">
        <div className="p-4">
          {/* Your Profile Title */}
          <h1
            className="text-3xl logo text-center font-bold mb-4 cursor-pointer"
            onClick={handleToggle}
          >
            Your Profile
          </h1>

          
          <div
            className={`transition-all duration-500 ease-in-out ${
              isProfileVisible
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <img
              className="w-full rounded-xl"
              src={user.photoURL}
              alt="Profile"
            />
            <h1 className="my-2 text-xl font-bold logo">{user.displayName}</h1>
            <h1 className="text-xl font-bold">{user.email}</h1>
            <button className="mt-4 btn bg-custom-gradient text-white">Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8  mx-auto">
        {myEquipment.map((item) => (
          <Zoom duration={1500}>
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
                <p className="text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <Rating
                    initialRating={item.rating}
                    fullSymbol={<FaStar className="text-orange-600"></FaStar>}
                    emptySymbol={<FaStar className="text-gray-300"></FaStar>}
                  ></Rating>
                  <span className="text-sm text-gray-600">
                    ({item.rating} Reviews)
                  </span>
                </div>

                <div className="card-actions justify-between mt-5">
                  <NavLink to={`/details/${item._id}`}>
                    <button className="btn bg-custom-gradient text-white hover:bg-indigo-700">
                      View Details <FaEye></FaEye>
                    </button>
                  </NavLink>
                  <NavLink to={`/update/${item._id}`}><button  className="btn bg-green-600 text-white hover:bg-green-700">
                    Update <FaPencilAlt />
                  </button></NavLink>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-red-500 text-white hover:bg-red-700"
                  >
                    Delete <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
