import React, { useEffect, useState } from "react";
import Nav from "../Component/Optional/Nav";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../Component/Optional/Footer";
import { Toaster } from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";

const Layout = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollRestoration />
      <Toaster />
      <Nav />

      <div className="max-w-[1900px] mx-auto min-h-[calc(100svh-350px)]">
        {isFirstLoading || navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-[500px]">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </div>
        ) : (
          <div className="mt-20">
            <Outlet />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
