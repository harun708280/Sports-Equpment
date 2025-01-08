import React, { useContext } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { DarkContext } from "./Theme";
import olp from "./olympic-athlete.json";
import Lottie from "lottie-react";
import { CiLogout } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../Hooks/useCard";
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
      .then((result) => {})
      .catch((er) => {});
  };

  const [cart] = useCard();
  
  

  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } fixed left-0 right-0 z-20 top-0  w-11/12 mx-auto`}
    >
      <div className="navbar bg-base-100 dark:bg-slate-800 w-full mx-auto px-4">
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
              {user?.email && (
                <li>
                  <NavLink
                    to="/all-Equipment"
                    activeClassName="text-[#6eb80e] font-bold"
                  >
                    All Sports Equipment
                  </NavLink>
                </li>
              )}
              {user?.email && (
                <li>
                  <NavLink
                    to="/add-Equipment"
                    activeClassName="text-[#6eb80e] font-bold"
                  >
                    Add Equipment
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/my-equipment"
                  activeClassName="text-[#6eb80e] font-bold"
                >
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-Equipment"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                }
              >
                All Sports Equipment
              </NavLink>
            </li>
            {user?.email && (
              <li>
                <NavLink
                  to="/add-Equipment"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                      : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                  }
                >
                  Add Equipment
                </NavLink>
              </li>
            )}
            {user?.email && (
              <li>
                <NavLink
                  to="/my-equipment"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-[#6eb80e] btn text-xl font-bold text-[#6eb80e] transition-all duration-300"
                      : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] transition-all duration-300"
                  }
                >
                  My Equipment
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* User Section */}
        <div className="navbar-end space-x-12 flex items-center">
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

          {/* <button onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            ) : (
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            )}
          </button> */}

          <Link to='cart'><div className="mr-6 relative">
            <button className="flex  items-center gap-2">
              <FaShoppingCart className="text-4xl" />
              <div className="absolute -top-2 -right-7 badge badge-secondary rounded-full">
                {cart.length}
              </div>
            </button>
          </div></Link>

          {/* User Profile */}
          {user && (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-14 h-14 rounded-full"
                  src={
                    user?.photoURL ||
                    "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                  }
                  alt="User"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-lg font-medium menu bg-black bg-opacity-70 text-white rounded-box z-[1] w-[400px] p-2 shadow"
              >
                <li>
                 <Link to='/cart'>
                 <div className="mr-6 ">
                    <button className="flex  items-center gap-2">
                      <FaShoppingCart className="" /> 
                      Total Cart
                      <div className=" badge badge-secondary rounded-full">
                        {cart.length}
                      </div>
                    </button>
                  </div>
                 </Link> 
                </li>
                <li>
                  <p onClick={Logout} className="text-lg font-medium">
                    <CiLogout className="text-white" /> Logout
                  </p>
                </li>
              </ul>
            </div>
          )}

          {/* Login/Logout Buttons */}
          {!user && (
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
