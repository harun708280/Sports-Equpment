import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../Firebase/Authentication";
import Swal from "sweetalert2";
import { DarkContext } from "../Optional/Theme";

const Update = () => {
  useEffect(()=>{
    document.title="Sports Zone || Update"

},[])
  const {isDark}=useContext(DarkContext)
  const loadData = useLoaderData();
  const navigate=useNavigate()
  const { user } = useContext(UserAuthContext);
  const {
    users,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    image,
    _id
  } = loadData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = parseInt(form.price.value)
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const image = form.image.value;
    const users = user.email;
    const equipmentUpdate = {
      users,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      image,
      _id,
    };
    
    

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-white",
        cancelButton: "btn bg-red-600 mr-7 text-white"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Update it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`${import.meta.env.VITE_API}/equipments`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body:JSON.stringify(equipmentUpdate)
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount >0) {
            navigate('/my-equipment')
            swalWithBootstrapButtons.fire({
              title: "Updated!",
              text: "Your file has been Updated.",
              icon: "success"
            });
          }
          else{
            swalWithBootstrapButtons.fire({
              title: "Sorry!",
              text: "Your not updated your file!",
              icon: "error"
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
          icon: "error"
        });
      }
    });

    
  };

  return (
    <div>
      <div>
        <div className="w-10/12 mx-auto my-12 bg-base-200 shadow-lg shadow-[#374820]  p-5">
          <h1 className={`${isDark?"text-center text-5xl text-[#6eb80e] font-bold logo":"text-center text-5xl font-bold logo"}`}>
            Update Your Equipment
          </h1>
          <div className="mt-7">
            <form onSubmit={handleUpdate} className={`${isDark && 'text-black'}`}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Item Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={itemName}
                    value={user.displayName}
                    placeholder="Enter item name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={itemName}
                    value={user.email}
                    placeholder="Enter item name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={itemName}
                    name="itemName"
                    placeholder="Enter item name"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Category Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category Name</span>
                  </label>
                  <select
                    name="categoryName"
                    defaultValue={categoryName}
                    className="select select-bordered"
                    required
                  >
                    <option value="" disabled selected>
                      Select a sport
                    </option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Badminton">Badminton</option>
                  </select>
                </div>

                {/* Price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={price}
                    name="price"
                    placeholder="Enter price"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Rating */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={rating}
                    name="rating"
                    step="0.1"
                    max="5"
                    min="0"
                    placeholder="Enter rating (0-5)"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Customization */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Customization</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={customization}
                    name="customization"
                    placeholder="e.g., bat with extra grip, hit paper"
                    className="input input-bordered"
                  />
                </div>

                {/* Processing Time */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Processing Time</span>
                  </label>
                  <input
                    type="text"
                    name="processingTime"
                    defaultValue={processingTime}
                    placeholder="e.g., 3-5 days"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Stock Status */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Stock Status</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={stockStatus}
                    name="stockStatus"
                    placeholder="Enter available quantity"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Upload Image</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={image}
                    name="image"
                    className="file-input file-input-bordered"
                    placeholder="   Enter PhotoURL"
                    required
                  />
                </div>

                {/* Description */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    placeholder="Enter item description"
                    className="textarea textarea-bordered"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-xl text-white bg-[#6eb80e]"
                >
                  Update Equipment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
