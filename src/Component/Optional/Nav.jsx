import React, { useContext } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";
import { NavLink } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { DarkContext } from "./Theme";
import olp from "./olympic-athlete.json";
import Lottie from "lottie-react";

const Nav = () => {
  const animation = {
    loop: true,
    autoplay: true,
    animationData: olp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { name, LoginGoogle, user, Logout } = useContext(UserAuthContext);
  const { isDark, setIsDark } = useContext(DarkContext);

  const handleLoginGoogle = () => {
    LoginGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="navbar bg-base-100 w-full mx-auto px-4">
        <div className="navbar-start">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <Lottie animationData={olp} className="w-12" />
            <span className="hidden md:inline-block text-2xl font-bold text-[#6eb80e]">
              Sports Zone
            </span>
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 mt-3 p-2 shadow rounded-box z-[1] w-52"
            >
              <li>
                <NavLink to="/" activeClassName="text-[#6eb80e] font-bold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-Equipment" activeClassName="text-[#6eb80e] font-bold">
                  All Sports Equipment
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-Equipment" activeClassName="text-[#6eb80e] font-bold">
                  Add Equipment
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-equipment" activeClassName="text-[#6eb80e] font-bold">
                  My Equipment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar Center for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-lg">
            <li>
              <NavLink to="/" className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-Equipment" className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                }>
                All Sports Equipment
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-Equipment" className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                }>
                Add Equipment
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-equipment" className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                }>
                My Equipment
              </NavLink>
            </li>
          </ul>
        </div>

        {/* User Section */}
        <div className="navbar-end space-x-3 flex items-center">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 16a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>

          {/* User Profile */}
          <Tooltip content={`${user ? user.displayName : "Guest User"}`}>
            <img
              className="w-10 h-10 rounded-full"
              src={
                user?.photoURL ||
                "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
              }
              alt="User"
            />
          </Tooltip>

          {/* Login/Logout Buttons */}
          {user ? (
            <button
              onClick={() => Logout()}
              className="btn bg-[#6eb80e] text-white"
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-2">
              <NavLink to="/login">
                <button className="btn bg-[#6eb80e] text-white">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn bg-[#6eb80e] text-white">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
