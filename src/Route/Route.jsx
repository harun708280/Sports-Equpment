import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import AddEquipment from "../Component/Equipment/AddEquipment";
import AllEquipment from "../Component/Equipment/AllEquipment";

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

        }
      ]
    },
  ]);

export default router