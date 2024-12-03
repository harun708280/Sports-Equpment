import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import AddEquipment from "../Component/Equipment/AddEquipment";
import AllEquipment from "../Component/Equipment/AllEquipment";
import LoginForm from "../Component/Security/LoginForm";
import RegisterForm from "../Component/Security/RegisterForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/add-Equipment',
          element:<AddEquipment></AddEquipment>

        }
        ,
        {
          path:'/all-Equipment',
          element:<AllEquipment></AllEquipment>

        },
        {
          path:'/login',
          element:<LoginForm></LoginForm>
        },
        {
          path:'/register',
          element:<RegisterForm></RegisterForm>
        }
      ]
    },
  ]);

export default router