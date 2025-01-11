import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCheckToSlot, FaUserGear, FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AiFillProduct, AiFillProfile } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { ImProfile } from "react-icons/im";
const AdminSlite = () => {
  return (
    <div className="bg-custom-gradient  min-h-svh text-white">
      <div className="w-11/12 mx-auto">
        <h1 className="text-xl font-semibold text-left pt-7 uppercase">
          Sports Zone{" "}
        </h1>
        <p className="text-sm">Admin DashBoard</p>
        <div className="flex flex-col justify-between min-h-[90vh]">
        <div className="py-9">
            <NavLink><p className="flex items-center gap-2 text-lg mb-4"><FaHome/>  Admin Home</p></NavLink>
            <div className="divider"></div>
            <NavLink><p className="flex items-center gap-2 text-lg mb-4"><FaUsers />  User Manage</p></NavLink>
            <NavLink><p className="flex items-center gap-2 text-lg mb-4"><FaUserGear />  Seller Manage</p></NavLink>
            <NavLink><p className="flex items-center gap-2 text-lg mb-4"><AiFillProduct />  All Product</p></NavLink>
            <NavLink><p className="flex items-center gap-2 text-lg mb-4"><FaCheckToSlot />  Order Check</p></NavLink>
            
        </div>
        <div className="flex-e">
        <NavLink><p className="flex items-center gap-2 text-lg mb-4"><ImProfile />  Profile</p></NavLink>
        <NavLink><p className="flex items-center gap-2 text-lg mb-4"><MdOutlineLogout />  Logout</p></NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSlite;
