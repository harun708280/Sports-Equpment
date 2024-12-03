import React, { useContext } from "react";
import { UserAuthContext } from "../../Firebase/Authentication";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { name, LoginGoogle } = useContext(UserAuthContext);
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
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl logo bg-[#6eb80e] hover:bg-[#579505] text-white">
            Sports Zone
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3  bg-none text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] text-xl font-bold text-[#6eb80e]"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e]"
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
                    ? "border-b-4 border-[#6eb80e] text-xl font-bold text-[#6eb80e]"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e] "
                }
              >
                All Sports Equipment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-Equipment"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] text-xl font-bold text-[#6eb80e]"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e]"
                }
              >
                Add Equipment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-Equipment"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-[#6eb80e] text-xl font-bold text-[#6eb80e]"
                    : "border-b-4 border-transparent hover:border-[#6eb80e] hover:text-xl hover:font-bold hover:text-[#6eb80e]"
                }
              >
                My Equipment
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-[#6eb80e] hover:bg-[#6eb80e] text-white" onClick={handleLoginGoogle}>
            Login 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
