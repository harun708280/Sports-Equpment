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
import Details from "../Component/Details/Details";
import Private from "../Private/Private";
import Update from "../Component/Equipment/Update";
import Error from "../Component/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch(`https://sports-equiepment.vercel.app/equipments`),
          children:[
            {
              path:'/Equipment/:category',
              element:<LaodCategory></LaodCategory>,
              loader:({params})=>fetch(`https://sports-equiepment.vercel.app/equipments?category=${ params.category}`)
            },
            {
              path:'/',
              element:<LaodCategory></LaodCategory>,
              loader:()=>fetch(`https://sports-equiepment.vercel.app/equipments`)
            }
          ]
        },
        {
          path:'/add-Equipment',
          element:<Private><AddEquipment></AddEquipment></Private>

        }
        ,
        {
          path:'/all-Equipment',
          element:<AllEquipment></AllEquipment>,
          loader:()=>fetch(`https://sports-equiepment.vercel.app/all-Equipment`)

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
          element:<Private><MyEquipment></MyEquipment></Private>
        },
        {
          path:'/details/:id',
          element:<Private><Details></Details></Private>,
          loader:({params})=>fetch(`https://sports-equiepment.vercel.app/equipments/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`https://sports-equiepment.vercel.app/equipments/${params.id}`)
        }
      ]
    },
  ]);

export default router