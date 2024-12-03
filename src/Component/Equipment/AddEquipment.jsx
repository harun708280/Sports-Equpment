import React from "react";

const AddEquipment = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto my-12">
        <h1 className="text-center text-5xl font-bold logo">Add Equipment</h1>
        <div className="mt-7">
          <form action="">
            <div className="grid grid-cols-2 gap-6">
              {/* Item Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
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
                  name="image"
                  className="file-input file-input-bordered"
                  placeholder="   Enter PhotoURL"
                  required
                />
              </div>

              {/* Description */}
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
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
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;
