import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";
import { FaEye, FaPencilAlt, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";
import axios from "axios";
import AxiosSecure from "../AxiosSecure";

const MyEquipment = () => {
  useEffect(()=>{
    document.title="Sports Zone || My-Equipment"

},[])
  const { user } = useContext(UserAuthContext);
  const userEmail = user?.email;
  const [myEquipment, setMyEquipment] = useState([]);
  
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const axiosSec=AxiosSecure()

  useEffect(() => {
    // if (userEmail) {
    //   const fetchData = async () => {
    //     const res = await fetch(
    //       `http://localhost:9000/all-Equipment?user=${userEmail}`
    //     );
    //     const data = await res.json();

    //     setMyEquipment(data);`
    //   };
    //   fetchData();
    // }

    // axios.get(`/all-Equipment?user=${userEmail}`,{
    //   withCredentials:true
    // })
    // .then(res=>setMyEquipment(res.data))
    axiosSec.get(`/all-Equipment?user=${userEmail}`)
    .then(res=>setMyEquipment(res.data))
  }, [user.email]);

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
          fetch(`${import.meta.env.VITE_API}/equipments/${id}`, {
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
    <div className="">
      {
        myEquipment.length===0 && <div className="text-center min-h-96 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-bold">No Equipment Added Yet</h1>
          <p className="text-gray-500 mt-2">
            You haven't added any equipment to your collection. Click the button below to add your first equipment!
          </p>
          <NavLink to='/add-Equipment'>
          <button className="bg-custom-gradient py-2 px-5 rounded-lg text-white mt-3">Add Equipment</button>
          </NavLink>
        </div>
      }
      <div className="flex w-10/12 my-12 mx-auto">
      
      <div className="grid md:grid-cols-3 gap-12  mx-auto">
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
                  <NavLink to={`/update/${item._id}`}><button  className="btn bg-green-400 text-white hover:bg-green-700">
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
    </div>
  );
};

export default MyEquipment;
