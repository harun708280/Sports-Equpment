import React from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);
    // You can add code to submit the form data to your backend or authentication service
  };

  return (
    <div className="w-10/12 md:w-6/12 lg:w-4/12 mx-auto my-12 shadow-md">
      <h1 className="text-center text-4xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6 bg-white p-6 rounded ">
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="input input-bordered"
            required
          />
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button type="submit" className="btn bg-[#6eb80e] text-white text-xl  w-full">
            Login
          </button>
          <button type="submit" className="btn bg-[#6eb80e]  my-3 text-white text-xl  w-full">
            <span><FaGoogle /></span> <span>Continue With Google</span>
          </button>
          <h1 className="text-center"><span>Don't have an account? <span className="text-red-600"><NavLink to='/register'>Register</NavLink></span></span></h1>
        </div>
      </form>
      <div className="">
        
      </div>
    </div>
  );
};

export default LoginForm;
