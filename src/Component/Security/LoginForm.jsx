import React, { useContext, useState } from "react";
import { FaGoogle,FaEye, FaEyeSlash,} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../Firebase/Authentication";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const LoginForm = () => {
    const {LoginGoogle,Login}=useContext(UserAuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email,password)
    .then(result=>{
        toast.success('successfully Login')
        navigate('/')
    })
    .catch(error=>{
        switch (error.code) {
          case "auth/user-not-found":
            toast.error("No user found with this email");
            break;
          case "auth/wrong-password":
            toast.error("Incorrect password. Please try again.");
            break;
          case "auth/invalid-email":
            toast.error("Invalid email address. Please enter a valid email.");
            break;
          
          
          
          default:
            toast.error("An unknown error occurred. Please try again.");
            console.error("Error Code:", error.code, "Message:", error.message);
        }
      })


    const user = { email, password };
    console.log(user);
    // You can add code to submit the form data to your backend or authentication service
  };


  const handleGoogleLogin=()=>{
    LoginGoogle()
    .then(result=>{
        toast.success('successfully login')
        navigate('/')
    })
    .catch(error=>{
        switch (error.code) {
          case "auth/user-not-found":
            toast.error("No user found with this email");
            break;
          case "auth/wrong-password":
            toast.error("Incorrect password. Please try again.");
            break;
          case "auth/invalid-email":
            toast.error("Invalid email address. Please enter a valid email.");
            break;
          
          
          
          default:
            toast.error("An unknown error occurred. Please try again.");
            console.error("Error Code:", error.code, "Message:", error.message);
        }
      })
  }

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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className="input input-bordered  w-full "
          />
          
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-14 right-6 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button type="submit" className="btn bg-[#6eb80e] text-white text-xl  w-full">
            Login
          </button>
          <button onClick={handleGoogleLogin} type="submit" className="btn bg-[#6eb80e]  my-3 text-white text-xl  w-full">
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
