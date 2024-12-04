import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import AddEquipment from "../Component/Equipment/AddEquipment";
import AllEquipment from "../Component/Equipment/AllEquipment";
import LoginForm from "../Component/Security/LoginForm";
import RegisterForm from "../Component/Security/RegisterForm";
import Product from "../Component/Home/Product";
import LaodCategory from "../Component/Home/LaodCategory";
import MyEquipment from "../Component/Equipment/MyEquipment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch(`http://localhost:9000/equipments`),
          children:[
            {
              path:'/Equipment/:category',
              element:<LaodCategory></LaodCategory>,
              loader:({params})=>fetch(`http://localhost:9000/equipments?category=${ params.category}`)
            },
            {
              path:'/',
              element:<LaodCategory></LaodCategory>,
              loader:()=>fetch(`http://localhost:9000/equipments`)
            }
          ]
        },
        {
          path:'/add-Equipment',
          element:<AddEquipment></AddEquipment>

        }
        ,
        {
          path:'/all-Equipment',
          element:<AllEquipment></AllEquipment>,
          loader:()=>fetch(`http://localhost:9000/all-Equipment`)

        },
        {
          path:'/login',
          element:<LoginForm></LoginForm>
        },
        {
          path:'/register',
          element:<RegisterForm></RegisterForm>
        },
        {
          path:'/my-equipment',
          element:<MyEquipment></MyEquipment>
        }
      ]
    },
  ]);

export default router