import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { UserAuthContext } from "../../Firebase/Authentication";
import Swal from "sweetalert2";
import axios from "axios";
import usePublicAxios from "./../../Hooks/usePublicAxios";

const RegisterForm = () => {
  useEffect(() => {
    document.title = "Sports Zone || Registration";
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    checkbox: "",
  });

  const navigate = useNavigate();
  const axiosPublic = usePublicAxios();

  const { CreateAccount, update, setIsLoading, isLoading } =
    useContext(UserAuthContext);
  const imageHosting =
    "https://api.imgbb.com/1/upload?key=2a9bcf84d4334dcac7a2729bb6336536";

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.image.files[0];
    const password = form.password.value;
    const checkbox = form.checkbox.checked;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if (!name) {
      setErrorMessage((prev) => ({ ...prev, name: "Invalid Name" }));
      toast.error("Invalid Name");
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage((prev) => ({
        ...prev,
        password:
          "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      }));
      toast.error("Invalid Password");
      return;
    }

    if (!checkbox) {
      toast.error("Accept the terms and conditions");
      return;
    }

    // Upload Image
    const formData = new FormData();
    formData.append("image", photo);
    try {
      const res = await axios.post(imageHosting, formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      const imageUrl = res.data.data.url;
      setErrorMessage({
        name: "",
        email: "",
        photo: "",
        password: "",
        checkbox: "",
      });

      CreateAccount(email, password)
        .then((result) => {
          update(name, imageUrl)
            .then(async () => {
              const userData = { name, email, imageUrl,role:"customer" };
              await axiosPublic.post("/users", userData);

              navigate("/");
              Swal.fire({
                title: "Good job!",
                text: "Registration successful!",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                  confirmButton:
                    "bg-[#6eb80e] text-white px-6 py-2 rounded hover:bg-[#5ea107] focus:ring focus:ring-[#6eb80e]",
                },
              });
              setIsLoading(false);
              form.reset();
            })
            .catch(() => toast.error("Something went wrong"));
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              setErrorMessage((prev) => ({
                ...prev,
                email: "This email is already in use.",
              }));
              toast.error("This email is already in use");
              break;

            case "auth/invalid-email":
              setErrorMessage((prev) => ({
                ...prev,
                email: "Please enter a valid email address.",
              }));
              toast.error("Please enter a valid email address.");
              break;

            case "auth/missing-email":
              setErrorMessage((prev) => ({ ...prev, email: "Invalid email" }));
              toast.error("Invalid email");
              break;

            default:
              toast.error("Something went wrong! Please try again later.");
              break;
          }
        });
    } catch (error) {
      toast.error("Image upload failed! Please try again.");
      setErrorMessage((prev) => ({ ...prev, photo: "Image upload failed" }));
    }
  };

  return (
    <div className="w-10/12 md:w-6/12 lg:w-4/12 mx-auto my-12">
      <h1 className="text-center text-4xl font-bold mb-6">Registration</h1>
      <form
        onSubmit={handleRegister}
        className="space-y-6 bg-white p-6 rounded shadow-md"
      >
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="input input-bordered"
          />
          {errorMessage.name && (
            <p className="text-red-600">{errorMessage.name}</p>
          )}
        </div>

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
          />
          {errorMessage.email && (
            <p className="text-red-600">{errorMessage.email}</p>
          )}
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered file-input-w-full"
          />
          {errorMessage.photo && (
            <p className="text-red-600">{errorMessage.photo}</p>
          )}
        </div>

        {/* Password */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          {errorMessage.password && (
            <p className="text-red-600">{errorMessage.password}</p>
          )}
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-14 right-6 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="form-control mt-3">
          <label className="label justify-start gap-4 cursor-pointer">
            <input type="checkbox" name="checkbox" className="checkbox" />
            <span className="label-text">Accept Terms & Conditions</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button
            type="submit"
            className="btn bg-[#6eb80e] text-xl text-white w-full"
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Register"
            )}
          </button>
        </div>

        <h1 className="text-center">
          Already have an account?{" "}
          <span className="text-red-600">
            <NavLink to="/login">Login</NavLink>
          </span>
        </h1>
      </form>
    </div>
  );
};

export default RegisterForm;
