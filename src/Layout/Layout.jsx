import React from "react";
import Nav from "../Component/Optional/Nav";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../Component/Optional/Footer";
import { Toaster } from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <ScrollRestoration />
      <Toaster></Toaster>
      <Nav></Nav>

      <div className="max-w-[1900px] mx-auto min-h-[calc(100svh-350px)]">
        {navigation.state == "loading" ? (
          <div className="flex justify-center items-center h-[500px]">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
