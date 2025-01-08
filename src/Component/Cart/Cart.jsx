import React from "react";
import car from "/cart.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useCard from "../../Hooks/useCard";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

const Cart = () => {
  const [cart, refetch] = useCard();
  console.log(cart);

  return (
    <div className="w-11/12 mx-auto my-12">
      <div
        className="hero rounded-lg h-[50vh]"
        style={{
          backgroundImage: `url(${car})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Welcome to My Cart</h1>
            <p className="mb-5">
              Here you can review your selected items, adjust quantities, and
              proceed to checkout for a seamless shopping experience.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7 flex gap-9">
        <div className="flex-1">
          <p className="text-xl font-bold">Your Cart</p>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-lime-400">
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {/* row 4 */}
                {cart.map((item, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item?.Equipment?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {item?.Equipment?.itemName}
                          </div>
                          <div className="text-sm opacity-50">
                            {item?.Equipment?.categoryName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.Equipment?.price}</td>
                    <td>
                      <div className="flex items-center space-x-4">
                        
                        <button
                          // onClick={handleDecrement}
                          className="px-3 py-1 bg-gray-300 rounded text-gray-800"
                          // disabled={quantity === 1}
                        >
                          -
                        </button>
                        <p className="font-bold">{item.quantity}</p>
                        <button
                          // disabled={quantity === 6}
                          // onClick={handleIncrement}
                          className="px-3 py-1 bg-gray-300 rounded text-gray-800"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <th>{item?.Equipment?.price * item.quantity}</th>
                    <th><button className="hover:text-red-500">Delete</button></th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
        <div className=" w-4/12 p-5 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-5">Checkout Form</h2>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              address: "",
              phoneNumber: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block font-medium">
                    Full Name
                  </label>
                  <Field
                    name="fullName"
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block font-medium">
                    Address
                  </label>
                  <Field
                    name="address"
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block font-medium">
                    Phone Number
                  </label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-custom-gradient text-white w-full"
                >
                  {isSubmitting ? "Processing..." : "Proceed to Checkout"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Cart;
